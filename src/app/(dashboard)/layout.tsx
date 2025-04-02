import LayoutStyles from "@/styles/Layout.module.scss"
import DashboardStyles from "@/styles/Dashboard.module.scss"
import NavbarStyles from "@/styles/Menu/Navbar.module.scss"
import HeaderStyles from "@/styles/Header.module.scss"

import { SideNav } from "@/components/Navbar/SideNav"
import { SidebarWrapper } from "@/components/Navbar/SidebarWrapper"
import { UserCard } from "@/components/UserCard"
import { SidebarProvider } from "@/providers/SidebarProvider"
import { RetractSidebarBtn } from "@/components/Navbar/RetractSidebarBtn"
import { SearchBar } from "@/components/Search/SearchBar"
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={LayoutStyles.DashboardLayout}>
            <SidebarProvider>
                <SidebarWrapper>
                    <RetractSidebarBtn />
                    <hr className={NavbarStyles.Divider} />
                    <SideNav />
                    <UserCard />
                </SidebarWrapper>
            </SidebarProvider>
            <main className={DashboardStyles.main}>
                <header className={HeaderStyles.Header}>
                    <SearchBar />
                    <div>
                        <CredentialsAddBtn text="Add new entry" addIcon />
                    </div>
                </header >
                {children}
            </main>
        </div>
    )
}