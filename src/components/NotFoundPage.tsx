import { auth } from "@/auth"
import LayoutStyles from "@/styles/Layout.module.scss"

import Link from "next/link"

export const NotFoundPage = async () => {

    const session = await auth();

    return <>
        <main className={LayoutStyles.LandingPageLayout}>
            <h1>No Page Found</h1>
            {
                session && session.user ?
                    <Link href="/dashboard" >Go back to dashboard</Link> :
                    <Link href="/" >Go back to Home Page</Link>
            }
        </main>
    </>
}