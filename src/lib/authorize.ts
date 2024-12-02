import User from "@/models/User";
import dbConnect from "./dbConnect";

export const getUser = async (userId: string | undefined) => {
    if (!userId) return undefined;
    
    try {
        await dbConnect();
        
        const user = await User.findOne({ userId });

        return user
    } catch(er) {
        throw er
    }
};