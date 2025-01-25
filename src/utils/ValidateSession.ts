import { auth } from "@/auth";
import { redirect } from "next/navigation";

// This function checks if there is a session and session user
// This function is for server components
export async function validateSession() {
    const session = await auth();

    // If no session or session user
    if (!session || !session.user) {
        redirect("/login");
    }
    
    // Return the session if it's valid
    return session;
}
