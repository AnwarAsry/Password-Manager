import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

// Hook for checking if there is a session and session user
export const useAuthRedirect = () => {
    // Gets the session
    const { data: session, status } = useSession();

    // State for loading, can be used for loading components also
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "loading") return;
        
        // If no session or session user
        if (!session || !session.user) {
            redirect("/login");
        }

        setIsLoading(false);
    }, [session, status]);

    // Return loading state
    return { isLoading };
};