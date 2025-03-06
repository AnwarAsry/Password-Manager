import LayoutStyles from "@/styles/Layout.module.scss"
import HeaderStyles from "@/styles/Header.module.scss"
import DashboardStyles from "@/styles/Dashboard.module.scss"

import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar/Navbar"
import { SideMenuWrapper } from "@/components/Navbar/SideMenuWrapper"
import { UserCard } from "@/components/UserCard"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={LayoutStyles.DashboardLayout}>
            <Header />
            <SideMenuWrapper>
                <Navbar />
                <hr className={HeaderStyles.Divider} />
                <UserCard />
            </SideMenuWrapper>
            <main className={DashboardStyles.main}>
                {children}
            </main>
        </div>
    )
}