import prisma from "@lib/prisma";
import { NextRequest } from "next/server";

type Params = Promise<{ id: string }>

export async function DELETE(req: NextRequest, { params }: { params: Params}) {
    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param id
        const parameters = await params;
        const id = parameters.id;

        // Find object by id
        const deletedObj = await prisma.storedCredential.delete({
            where: {
                id: id
            }
        })

        if (!deletedObj) {
            return new Response(JSON.stringify({success: false, message: "Object not found"}));
        }

        // Return successfull
        return new Response(JSON.stringify({success: true, message: "Successfull deletion"}));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}));
    }
}