"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import ButtonStyles from "@/styles/Buttons.module.scss"

export const AuthButton = () => {

    const session = useSession();

    // Checks if there is a session and has a user for log in and log out button
    return session.data?.user ? (
        <button className={ButtonStyles.LogoutBtn} onClick={async () => await signOut()}>Log out</button>
    ) : (
        <button className={ButtonStyles.PrimaryBtn} onClick={async () => await signIn()}>Log in</button>
    )
}   