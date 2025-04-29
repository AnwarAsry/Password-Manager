"use client"

import ButtonStyles from "@styles/Button.module.scss"
import { signIn } from "next-auth/react"

interface IProviderProps {
    provider: { id: string, name: string }
}
export const ProviderButton = ({ provider }: IProviderProps) => {
    return (
        // The type button is there to prevent the form on the parent to not submit and call the onClick function for sign in
        <button className={ButtonStyles.ProviderLogin} type="button" onClick={async () => await signIn(provider.id, { callbackUrl: "/dashboard" })}>
            {provider.name}
        </button>
    )
}   