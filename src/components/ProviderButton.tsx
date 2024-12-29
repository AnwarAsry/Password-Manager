"use client"

import FormStyles from "@/styles/Form.module.scss"
import { signIn } from "next-auth/react"

interface IProviderProps {
    provider: { id: string, name: string }
}

export const ProviderButton = ({ provider }: IProviderProps) => {

    const handleOnClick = async (id: string) => {
        try {
            // After successful login redirects the user to their dashboard
            await signIn(id, { callbackUrl: "/dashboard" })
        } catch (error) {
            throw error
        }
    }

    return <>
        {/* The type button is there to prevent the form on the parent to not submit and call the onClick function for sign in */}
        <button className={FormStyles.ProviderLogin} type="button" onClick={() => handleOnClick(provider.id)}>
            Sign in with {provider.name}
        </button>
    </>
}   