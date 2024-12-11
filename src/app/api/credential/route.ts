import dbConnect from "@/lib/dbConnect";
import Accounts from "@/models/Accounts"

export async function POST(req: Request) {
    await dbConnect();

    try {
        console.log("Inside Post REQ");
        
        // Get the data passed through body and turn it into an object
        const body = await req.json()
        // const body = duummyyData;

        // Create a new Credential to save
        const createObject = new Accounts({
            userID: body.userID,
            platform: body.platform,
            password: body.password,
            username: body.username,
            notes: body.notes
        })

        // Save the updataed database
        await createObject.save()
    
        // Return successfull
        return new Response(JSON.stringify({success: true}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}