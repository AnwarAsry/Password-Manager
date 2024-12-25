import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";
import { UpdateCredentialReq } from "@/models/request/UpdateCredentialReq";
import { NextRequest } from "next/server";
import CryptoJS from "crypto-js";

type Params = Promise<{ id: string }>

export async function GET(req: NextRequest, { params }: { params: Params}) {
    await dbConnect();

    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param id
        const parameters = await params;
        const id = parameters.id;

        // Find object by id
        const dbCredentialFound = await IAccounts.findById(id);

        // If the object is not found 
        if (!dbCredentialFound) {
            return new Response(JSON.stringify({success: true, data: null, message: "Credential not found" }))
        }

        // This makes it so _id becomes id
        const formatedCredential = dbCredentialFound.toObject();
        
        // Return successfull
        return new Response(JSON.stringify({success: true, data: formatedCredential, message: "Successfull fetch" }));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}));
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Params}) {
    await dbConnect();

    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param id
        const parameters = await params;
        const id = parameters.id;

        // Find object by id
        await IAccounts.findByIdAndDelete(id);

        // Return successfull
        return new Response(JSON.stringify({success: true, message: "Successfull deletion"}));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}));
    }
}

export async function PUT(req: Request, { params }: { params: Params}) {
    await dbConnect();

    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param id
        const parameters = await params;
        const id = parameters.id;

        // Get the data passed through body and turn it into an object
        const body: UpdateCredentialReq = await req.json();

        // If password is not empty
        // Have in mind that this password is decrypted and needs to encrypt
        if (body.password) {
            // Encrypt the password
            const secretKey = process.env.SECRET_KEY as string;
            const encrypted = CryptoJS.AES.encrypt(body.password, secretKey).toString();

            // Change the password value to the encryption value
            body.password = encrypted;
        }

        // Update object
        await IAccounts.findByIdAndUpdate(id,{ $set: {
            platform: body.platform,
            username: body.username,
            password: body.password,
            notes: body.notes,
            category: body.category
        }});

        // Return successfull
        return new Response(JSON.stringify({success: true, message: "Updated Credentials" }));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}));
    }
}