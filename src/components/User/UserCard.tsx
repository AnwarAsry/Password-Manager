"use client"

import UserCardStyles from '@styles/UserCard.module.scss'
import avatar from '@public/avatar.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export const UserCard = () => {
    const { data: session } = useSession();

    // Checks if there is a session and has a user
    if (session && session.user) {
        return (
            <div className={UserCardStyles.UserCard}>
                <Image className={UserCardStyles.UserCardPic} src={session.user.image!} alt="Profile" width={40} height={40} />
            </div>
        )
    }

    return (
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.UserCardPic} src={avatar} alt="default pic" width={40} height={40} />
        </div>
    )
}