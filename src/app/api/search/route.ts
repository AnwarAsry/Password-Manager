import dbConnect from "@/lib/dbConnect";
import IAccounts from "@/models/IAccounts";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnect();

    try {
        // Get the query
        const searchParams = req.nextUrl.searchParams;
        const searchQuery = searchParams.get("searchQuery");

        // If there is no query string
        if (!searchQuery) {
            new Response(JSON.stringify({success: false, data: null, message: "No query" }))
        }
        
        // Find all objects with same value or letter sequence as the searchQuery
        // $options "i" expression makes the search case-insensitive
        const searchResultDB = await IAccounts.find({ "platform": { $regex: searchQuery, $options: "i" } });

        // Return successfull
        return new Response(JSON.stringify({success: true, data: searchResultDB, message: "Search Complete" }))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}))
    }
}