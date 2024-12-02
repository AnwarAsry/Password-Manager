"use client"

import { signIn } from "next-auth/react"

export const Button = () => {
    return <>
        <button onClick={() => signIn()}>Log in</button>
    </>
}   