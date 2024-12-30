import DashboardStyles from "@/styles/Dashboard.module.scss"
import { UserCard } from "@/components/UserCard"
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn"
import { AuthButton } from "@/components/AuthButton.client"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={DashboardStyles.Layout}>
            <header className={DashboardStyles.header}>
                <div className={DashboardStyles.HeaderContent}>
                    <CredentialsAddBtn text="ADD CREDENTIALS" />
                    <AuthButton />
                </div>
                <div>
                    <hr className={DashboardStyles.LineBreak} />
                    <UserCard />
                </div>
            </header>
            <main className={DashboardStyles.main}>
                {children}
            </main>
        </div>
    )
}