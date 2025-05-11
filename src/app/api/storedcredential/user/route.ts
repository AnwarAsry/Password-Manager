import { decrypt } from "@actions/ServerActions";
import prisma from "@lib/prisma";
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
    // // Get the query
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("userId")!;

    if (!id) {
        return new Response(JSON.stringify({success: false, data: null, message: "User ID not provided" }))
    }

    try {
        // Get all Credentials in the database that has userID property value same as user's id
        const dbSavedCredentials = await prisma.storedCredential.findMany({
            where: {
                userId: id,
            },
        })
    
        // If the object is not found 
        if (!dbSavedCredentials || dbSavedCredentials.length === 0) {
            return new Response(JSON.stringify({success: true, data: [], message: "No Credentials found" }))
        }
    
        // Decrypt the password aswell    
        const formatedCredentials = dbSavedCredentials.map(obj => {
            let decrypted = "";

            try {
                decrypted = obj.password ? decrypt(obj.password) : "";
            } catch (e) {
                console.error("Failed to decrypt password for credential id:", obj.id);
            }

            return {
                ...obj,
                password: decrypted,
            };
        })

        // Return successfull
        return new Response(JSON.stringify({success: true, data: formatedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}))
    }
}
