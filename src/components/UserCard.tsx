import { auth } from "@/auth";
import Image from "next/image";
import avatar from "@/public/avatar.png"

export const UserCard = async () => {
    const session = await auth();

    // Checks if there is a session and has a user for log in and log out button
    if (session) {
        return <>
            <Image src={session.user.image} alt="hej" width={60} height={60} />
            <h1>{session.user.name}</h1>
        </>
    }

    return <>
        <Image src={avatar} alt="default pic" />
        <h1>No name</h1>
    </>
}   