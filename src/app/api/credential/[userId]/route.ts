import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";

type Params = Promise<{ userId: string }>

export async function GET(req: Request, { params }: { params: Params}) {
    await dbConnect();

    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param userId
        const parameters = await params;
        const userId = parameters.userId;

        // Get all Credentials in the database that has userID property value same as user's id
        // const dbSavedCredentials = await IAccounts.find();
        const dbSavedCredentials = await IAccounts.find({ "userID": userId });

        // Return successfull
        return new Response(JSON.stringify({success: true, data: dbSavedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}))
    }
}
