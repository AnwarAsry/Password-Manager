import { encrypt } from "@/actions/ServerActions";
import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts"
import { CreateCredentialReq } from "@/models/request/CreateCredentialReq";

export async function POST(req: Request) {
    await dbConnect();

    const session = await auth();
    const userID = session?.user?.id;

    if (!userID) {
        return new Response(JSON.stringify({ success: false, message: "Unauthorized" }));
    }

    try {
        // Get the data passed through body and turn it into an object
        const body: CreateCredentialReq = await req.json();

        // If password is not empty
        if (body.password) {
            // Encrypt the password
            const encrypted = encrypt(body.password);

            // Change the password value to the encryption value
            body.password = encrypted;
        }

        // Create a new Credential to save
        const createObject = new IAccounts({
            userID,
            image: body.image,
            platform: body.platform,
            linkUrl: body.linkUrl,
            password: body.password,
            email: body.email,
            username: body.username,
            notes: body.notes,
        });

        // Save the updataed database
        await createObject.save();
    
        // Return successfull
        return new Response(JSON.stringify({success: true, message: "Saved Credentials" }));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}));
    }
}