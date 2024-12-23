import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";
import { NextRequest } from "next/server";

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
        
        // Return successfull
        return new Response(JSON.stringify({success: true, data: dbCredentialFound, message: "Successfull fetch" }));
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}));
    }
}