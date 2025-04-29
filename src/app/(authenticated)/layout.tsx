import SidebarStyles from '@styles/Menu/Sidebar.module.scss'
import HeaderStyles from '@styles/Header.module.scss'
import WrapperStyles from '@styles/Wrappers.module.scss'
import { DashboardGridLayout } from '@components/DashboardGridLayout'
import { RetractSidebarBtn } from '@components/Navbar/RetractSidebarBtn'
import { SideNav } from '@components/Navbar/SideNav'
import { SidebarProvider } from '@providers/SidebarProvider'
import { UserCard } from '@components/User/UserCard'
import { AddEntryBtn } from '@components/Buttons/AddEntryBtn'
import { SearchBar } from '@components/Search/SearchBar'
import { AuthSignOut } from '@components/Auth/AuthSignOut'

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header className={HeaderStyles.Header}>
                <a href="/">
                    <p className={HeaderStyles.LogoName}><span>Pass</span>Man</p>
                </a>
                <SearchBar />
                <AddEntryBtn />
            </header>
            <SidebarProvider>
                <DashboardGridLayout>
                    <aside className={SidebarStyles.SidebarWrapper}>
                        <RetractSidebarBtn />
                        <SideNav />
                        <AuthSignOut />
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