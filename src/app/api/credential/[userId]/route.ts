import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    await dbConnect();

    try {
        // Get query userId param
        const userId = params.userId;

        // Get all Credentials in the database that has userID property value same as user's id
        const listOfSavedCredentials = await IAccounts.find({ "userID": userId })

        // Return successfull
        return new Response(JSON.stringify({success: true, data: listOfSavedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}
