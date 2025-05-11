"use client"

import UserCardStyles from '@styles/UserCard.module.scss'
import avatar from '@public/avatar.png'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { TbLogout2, TbSettings } from 'react-icons/tb'

export const UserCard = () => {
    const { data: session } = useSession();

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    // Checks if there is a session and has a user
    if (session && session.user) {
        return (
            <div className={UserCardStyles.User}>
                <div className={UserCardStyles.UserCard} onClick={() => setShowDropdown(!showDropdown)}>
                    <Image className={UserCardStyles.UserCardPic} src={session.user.image!} alt="Profile" width={32} height={32} />
                    <p>{session.user.name}</p>
                </div>
                {
                    showDropdown && (
                        <ul className={UserCardStyles.UserDropdown}>
                            <li onClick={async () => await signOut()}>
                                <TbLogout2 />
                                Log out
                            </li>
                        </ul>
                    )
                }
            </div>
        )
    }

    return (
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.UserCardPic} src={avatar} alt="default pic" width={32} height={32} />
        </div>
    )
}