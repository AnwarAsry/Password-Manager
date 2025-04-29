"use client"

import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";

const CredentialPage = () => {
    const { data: session } = useSession();
    if (!session) {
        redirect("/login")
    }

    // Parameter for id
    const { id } = useParams<{ id: string }>();

    return (
        <section>
            <h2>View the credential info for {id}</h2>
        </section>
    )
}

export default CredentialPage;