"use client"
import UserCardStyles from "@/styles/UserCard.module.scss"
import NavbarStyles from "@/styles/Menu/Navbar.module.scss"

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
            <div className={UserCardStyles.UserCardContainer}>
                <div className={UserCardStyles.UserCard}>
                    <Image className={UserCardStyles.ProfilePic} src={session.user.image!} alt="Profile" width={48} height={48} />
                    <div className={`${UserCardStyles.UserCardRightSide} ${isCollapsed ? UserCardStyles.UserCardRightSideCollapsed : ""}`}>
                        <p className={UserCardStyles.UserCardTitle}>{session.user.name}</p>
                        <p className={UserCardStyles.UserCardEmail}>{session.user.email}</p>
                    </div>
                </div>
            </div>
        </>
    }

    return <>
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.ProfilePic} src={avatar} alt="default pic" width={48} height={48} />
            <h1 className={UserCardStyles.UserCardTitle}>No name</h1>
        </div>
    </>
}   