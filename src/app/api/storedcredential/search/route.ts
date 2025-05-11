import prisma from "@lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Get the query
        const searchParams = req.nextUrl.searchParams;
        const searchQuery = searchParams.get("searchQuery");

        // If there is no query string
        if (!searchQuery) {
            new Response(JSON.stringify({success: false, data: null, message: "No query" }))
        }
        
        // Find all objects with same value or letter sequence as the searchQuery
        const searchResultDB = await prisma.storedCredential.findMany({
            where: {
                platform: { contains: searchQuery!, mode: "insensitive" }
            },
        });

        // Return successfull
        return new Response(JSON.stringify({success: true, data: searchResultDB, message: "Search Complete" }))
    } catch (error) {
        // Return unsuccessfull message        
        return new Response(JSON.stringify({success: false, data: null, message: JSON.stringify(error)}))
    }
}