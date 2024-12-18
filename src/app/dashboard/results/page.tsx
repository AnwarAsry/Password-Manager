import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Result = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    if (session.user) {
        return <>
            <Link href="/dashboard">Back to startpage</Link>
            <h1>Helloo Result!!!</h1>
        </>
    }
}

export default Result;