import DashboardStyles from "@/styles/Dashboard.module.scss"
import { UserCard } from "@/components/UserCard"
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn"
import { SearchBar } from "@/components/SearchBar"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={DashboardStyles.Layout}>
            <header className={DashboardStyles.header}>
                <CredentialsAddBtn />
                <UserCard />
            </header>
            <main className={DashboardStyles.main}>
                <SearchBar />
                {children}
            </main>
        </div>
    )
}