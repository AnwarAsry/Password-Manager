"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const AuthButton = () => {

    const session = useSession();

    return session.data?.user ? (
        <button onClick={async () => await signOut()}>Log out</button>
    ) : (
        <button onClick={async () => await signIn()}>Log in</button>
    )
}   