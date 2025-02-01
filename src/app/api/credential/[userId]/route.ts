import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";
import CryptoJS from "crypto-js";

type Params = Promise<{ userId: string }>

export async function GET(req: Request, { params }: { params: Params}) {
    await dbConnect();
    
    try {
        // Previously synchronous Dynamic APIs that rely on runtime information are now asynchronous in this new Nextjs 15v
        // Get param userId
        const parameters = await params;
        const userId = parameters.userId;
        
        const secretKey = process.env.SECRET_KEY as string;
        
        // Get all Credentials in the database that has userID property value same as user's id
        // const dbSavedCredentials = await IAccounts.find();
        const dbSavedCredentials = await IAccounts.find({ "userID": userId });
        
        // If the object is not found 
        if (!dbSavedCredentials) {
            return new Response(JSON.stringify({success: true, data: [], message: "Credentials not found" }))
        }
        
        // toObject makes it so _id becomes id
        // Decrypt the password aswell
        const formatedCredentials = dbSavedCredentials.map(obj => {
            if (obj.password) {
                try {
                    const decrypted = CryptoJS.AES.decrypt(obj.password, secretKey).toString(CryptoJS.enc.Utf8);

                    if (!decrypted) {
                        console.log("Decryption failed on:", obj);
                    }

                    return {
                        ...obj.toObject(),
                        password: decrypted,
                    };
                } catch (err) {
                    console.log(err);
                }
            }
            
            return obj.toObject();
        })
        
        // Return successfull
        return new Response(JSON.stringify({success: true, data: formatedCredentials, message: "Successfully retrived"}))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}))
    }
}
