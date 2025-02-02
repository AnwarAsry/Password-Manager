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
                <Image className={UserCardStyles.profilePic} src={session.user.image!} alt="hej" width={48} height={48} />
                <h1 className={UserCardStyles.UserCardTitle}>{session.user.name}</h1>
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