import { NextRequest } from "next/server";
import { decrypt } from "@actions/ServerActions";
import prisma from "@lib/prisma";

type Params = Promise<{ id: string }>

export async function GET(req: NextRequest, { params }: { params: Params}) {
    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param id
        const parameters = await params;
        const id = parameters.id;

        // Find object by id
        const dbCredentialFound = await prisma.storedCredential.findUnique({
            where: {
                id: id,
            },
        });

        // If the object is not found 
        if (!dbCredentialFound) {
            return new Response(JSON.stringify({success: true, data: null, message: "Credential not found" }))
        }
        
        // Decrypt the password for the user to see
        if (dbCredentialFound.password) {
            const decrypted = decrypt(dbCredentialFound.password);
            dbCredentialFound.password = decrypted;
        }
        
        // Return successfull
        return new Response(JSON.stringify({success: true, data: dbCredentialFound, message: "Successfull fetch" }));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}));
    }
}