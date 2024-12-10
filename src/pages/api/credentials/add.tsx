import Accounts from "@/models/Accounts";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const savedAccounts = await Accounts.find();

            console.log(savedAccounts);

            res.status(200).json({});
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}
