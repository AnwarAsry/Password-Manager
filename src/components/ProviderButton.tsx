"use client"

import loginStyles from "@/styles/login.module.scss"
import { signIn } from "next-auth/react"

interface IFormProps {
    provider: { id: string, name: string }
}

export const ProviderButton = ({ provider }: IFormProps) => {

    const onSubmit = async (id: string) => {
        try {
            await signIn(id, { callbackUrl: "/dashboard" })
        } catch (error) {
            throw error
        }
    }

    return <>
        <button className={loginStyles.provider} type="button" onClick={() => onSubmit(provider.id)}>
            Sign in with {provider.name}
        </button>
    </>
}   