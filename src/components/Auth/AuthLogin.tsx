"use client"

import ButtonStyles from '@styles/Button.module.scss'
import { signIn } from 'next-auth/react'

export const AuthLogin = () => {
    return (
        <button className={ButtonStyles.PrimaryBtn} onClick={async () => await signIn()}>Log in</button>
    )
}