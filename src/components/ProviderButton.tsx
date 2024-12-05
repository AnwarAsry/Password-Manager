"use client"

import loginStyles from "@/styles/login.module.scss"
import { signIn } from "next-auth/react"

interface IProviderProps {
    provider: { id: string, name: string }
}

export const ProviderButton = ({ provider }: IProviderProps) => {

    const onClick = async (id: string) => {
        try {
            // After successful login redirects the user to their dashboard
            await signIn(id, { callbackUrl: "/dashboard" })
        } catch (error) {
            throw error
        }
    }

    return <>
        {/* The type button is there to prevent the form on the parent to not submit and call the onClick function for sign in */}
        <button className={loginStyles.provider} type="button" onClick={() => onClick(provider.id)}>
            Sign in with {provider.name}
        </button>
    </>
}   