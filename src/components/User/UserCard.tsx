"use client"

import UserCardStyles from '@styles/UserCard.module.scss'
import avatar from '@public/avatar.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { SidebarContext } from '@context/SidebarContext'

export const UserCard = () => {
    const { data: session } = useSession();
    const { isCollapsed } = useContext(SidebarContext);

    // Checks if there is a session and has a user
    if (session && session.user) {
        return (
            <div className={UserCardStyles.UserCard}>
                <Image className={UserCardStyles.UserCardPic} src={session.user.image!} alt="Profile" width={40} height={40} />
                <div className={`${isCollapsed ? UserCardStyles.UserCardRightSideCollapsed : UserCardStyles.UserCardRightSide}`}>
                    <div>
                        <h4 className={UserCardStyles.UserCardName}>{session.user.name}</h4>
                        <p className={UserCardStyles.UserCardEmail}>{session.user.email}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.UserCardPic} src={avatar} alt="default pic" width={40} height={40} />
            <div className={UserCardStyles.UserCardRightSide}>
                <h4 className={UserCardStyles.UserCardName}>No name</h4>
            </div>
        </div>
    )
}