import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    if (session.user) {
        return <>
            <h1>{session.user.name}</h1>
            <Image src={session.user.image} alt="hej" width={60} height={60} />
        </>
    }
}

export default Dashboard;