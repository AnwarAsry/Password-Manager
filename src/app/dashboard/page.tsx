import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    if (session.user) {
        return <>
            <h1>Helloo Welcome!!!</h1>
        </>
    }
}

export default Dashboard;