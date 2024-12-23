import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts"
import { CreateCredentialReq } from "@/models/request/CreateCredentialReq";
import CryptoJS from "crypto-js"

export async function POST(req: Request) {
    await dbConnect();

    try {
        // Get the data passed through body and turn it into an object
        const body: CreateCredentialReq = await req.json();

        // If password is not empty
        if (body.password) {
            // Encrypt the password
            const secretKey = process.env.SECRET_KEY as string;
            const encrypted = CryptoJS.AES.encrypt(body.password, secretKey).toString();

            // Change the password value to the encryption value
            body.password = encrypted;
        }

        // Create a new Credential to save
        const createObject = new IAccounts({
            userID: body.userID,
            platform: body.platform,
            password: body.password,
            username: body.username,
            notes: body.notes,
            category: body.category,
            createdAt: new Date,
            updatedAt: new Date
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