import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";

type Params = Promise<{ userId: string }>

export async function GET(req: Request, { params }: { params: Params}) {
    await dbConnect();

    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get query userId param
        const querys = await params;
        const userId = querys.userId;

        // Get all Credentials in the database that has userID property value same as user's id
        const listOfSavedCredentials = await IAccounts.find({ "userID": userId })

        // Return successfull
        return new Response(JSON.stringify({success: true, data: listOfSavedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}
