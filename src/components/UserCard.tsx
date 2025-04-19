"use client"
import UserCardStyles from "@/styles/UserCard.module.scss"

import avatar from "@/public/avatar.png"
import { useSidebar } from "@/hooks/useSidebar";

import Image from "next/image";
import { useSession } from "next-auth/react";


export const UserCard = () => {
    const { data: session } = useSession();
    const { isCollapsed } = useSidebar();

    // Checks if there is a session and has a user
    if (session?.user) {
        return <>
            <div className={UserCardStyles.UserCard}>
                <Image className={UserCardStyles.UserCardPic} src={session.user.image!} alt="Profile" width={40} height={40} />
                <div className={`${UserCardStyles.UserCardRightSide} ${isCollapsed ? UserCardStyles.UserCardRightSideCollapsed : ""}`}>
                    <h4 className={UserCardStyles.UserCardName}>{session.user.name}</h4>
                    <p className={UserCardStyles.UserCardEmail}>{session.user.email}</p>
                </div>
            </div>
        </>
    }

    return <>
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.UserCardPic} src={avatar} alt="default pic" width={40} height={40} />
            <h1 className={UserCardStyles.UserCardName}>No name</h1>
        </div>
    </>
}   