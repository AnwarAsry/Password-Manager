import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    await dbConnect();

    try {
        // Get query userId param
        const { userId } = params;

        // Get all Credentials in the database that has userID property value same as user's id
        // const dbSavedCredentials = await IAccounts.find();
        const dbSavedCredentials = await IAccounts.find({ "userID": userId });  

        // Return successfull
        return new Response(JSON.stringify({success: true, data: dbSavedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}
