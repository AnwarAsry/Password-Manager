"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const AuthButton = () => {

    const session = useSession();

    // Checks if there is a session and has a user for log in and log out button
    return session.data?.user ? (
        <button onClick={async () => await signOut()}>Log out</button>
    ) : (
        <button onClick={async () => await signIn()}>Log in</button>
    )
}   