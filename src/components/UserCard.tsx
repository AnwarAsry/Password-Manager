import UserCardStyles from "@/styles/UserCard.module.scss"

import { auth } from "@/auth";
import avatar from "@/public/avatar.png"

import Image from "next/image";


export const UserCard = async () => {
    const session = await auth();

    // Checks if there is a session and has a user
    if (session?.user) {
        return <>
            <div className={UserCardStyles.UserCard}>
                <Image className={UserCardStyles.ProfilePic} src={session.user.image!} alt="hej" width={48} height={48} />
                <div className={UserCardStyles.UserCardLeftSide}>
                    <p className={UserCardStyles.UserCardTitle}>{session.user.name}</p>
                    <p className={UserCardStyles.UserCardEmail}>{session.user.email}</p>
                </div>
            </div>
        </>
    }

    return <>
        <div className={UserCardStyles.UserCard}>
            <Image className={UserCardStyles.profilePic} src={avatar} alt="default pic" width={48} height={48} />
            <h1 className={UserCardStyles.UserCardTitle}>No name</h1>
        </div>
    </>
}   