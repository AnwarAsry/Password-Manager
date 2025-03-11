import LayoutStyles from "@/styles/Layout.module.scss"
import HeaderStyles from "@/styles/Header.module.scss"
import DashboardStyles from "@/styles/Dashboard.module.scss"

import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Navbar/Sidebar"
import { SideMenuWrapper } from "@/components/Navbar/SideMenuWrapper"
import { UserCard } from "@/components/UserCard"
import { SidebarProvider } from "@/providers/SidebarProvider"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={LayoutStyles.DashboardLayout}>
            <SidebarProvider>
                <Header />
                <SideMenuWrapper>
                    <Sidebar />
                    <hr className={HeaderStyles.Divider} />
                    <UserCard />
                </SideMenuWrapper>
            </SidebarProvider>

            <main className={DashboardStyles.main}>
                {children}
            </main>
        </div>
    )
}