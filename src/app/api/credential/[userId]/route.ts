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
        console.log("what", dbSavedCredentials);

        const listOfSavedCredentials = dbSavedCredentials.map(obj => {
            console.log("ong", obj);
            
            return {
                id: obj.id,
                userID: obj.userID,
                platform: obj.platform,
                password: obj.password,
                username: obj.username,
                notes: obj.notes,
                createdAt: obj.createdAt,
                updatedAt: obj.updatedAt,
            }
        })        

        // Return successfull
        return new Response(JSON.stringify({success: true, data: listOfSavedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, message: JSON.stringify(error)}))
    }
}
