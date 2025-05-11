"use client"

import ButtonStyles from '@styles/Button.module.scss'
import { signOut } from 'next-auth/react'
import { TbLogout2 } from 'react-icons/tb'

export const AuthSignOut = () => {
    return (
        <button className={ButtonStyles.SecondaryBtn} onClick={async () => await signOut()}>
            <TbLogout2 className={ButtonStyles.BtnIcon} />
            <span>Log out</span>
        </button>
    )
}