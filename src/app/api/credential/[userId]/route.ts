import dbConnect from "@/lib/dbConnect";
import Accounts from "@/models/Accounts";

export async function GET(req: Request) {
    await dbConnect();

    try {
        // In order to get searchParams, turn the url into an url object
        const url = new URL(req.url)
        // Get query param you want
        const userId = url.searchParams.get("userId")

        // Get all Credentials in the database that has userID property value same as user's id
        const listOfObjects = Accounts.find({ "userID": userId })
    
        // Return successfull
        return new Response(JSON.stringify({success: true, data: listOfObjects, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}
