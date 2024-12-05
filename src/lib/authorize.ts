import User from "@/models/User";
import dbConnect from "./dbConnect";

export const getUser = async (userId: string | undefined) => {
    if (!userId) return undefined;
    
    try {
        // Connect to db
        await dbConnect();
        
        // Find the user by ID
        const user = await User.findById(userId);
        
        return user
    } catch(er) {
        throw er
    }
};