import { auth } from "@/auth";
import { CredentialsForm } from "@/components/CredentialsForm";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    if (session.user) {
        return <>
            <h1>Helloo Welcome!!!</h1>

            <CredentialsForm />
        </>
    }
}

export default Dashboard;