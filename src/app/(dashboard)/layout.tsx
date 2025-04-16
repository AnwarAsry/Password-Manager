import HeaderStyles from "@/styles/Header.module.scss"
import SidebarStyles from "@/styles/Menu/Sidebar.module.scss"
import WrapperStyles from "@/styles/Wrappers.module.scss"

import { SideNav } from "@/components/Navbar/SideNav"
import { UserCard } from "@/components/UserCard"
import { SidebarProvider } from "@/providers/SidebarProvider"
import { RetractSidebarBtn } from "@/components/Navbar/RetractSidebarBtn"
import { SearchBar } from "@/components/Search/SearchBar"
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn"
import { DashboardGridLayout } from "@/components/Layouts/DashboardGridLayout"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header className={HeaderStyles.Header}>
                <p className={HeaderStyles.LogoName}>PasswordManager</p>
                <SearchBar />
                <CredentialsAddBtn text="Add new entry" addIcon />
            </header >
            <SidebarProvider>
                <DashboardGridLayout>
                    <aside className={SidebarStyles.SidebarWrapper}>
                        <RetractSidebarBtn />
                        <hr className={SidebarStyles.Divider} />
                        <SideNav />
                        <hr className={SidebarStyles.Divider} />
                        <UserCard />
                    </aside>
                    <main className={WrapperStyles.DashboardContent}>
                        {children}
                    </main>
                </DashboardGridLayout>
            </SidebarProvider>
        </>
    )
}