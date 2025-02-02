import LayoutStyles from "@/styles/Layout.module.scss"
import DashboardStyles from "@/styles/Dashboard.module.scss"

import { Header } from "@/components/Header"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={LayoutStyles.DashboardLayout}>
            <Header />
            <main className={DashboardStyles.main}>
                {children}
            </main>
        </div>
    )
}