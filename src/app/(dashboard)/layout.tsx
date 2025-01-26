import LayoutStyles from "@/styles/Layout.module.scss"
import DashboardStyles from "@/styles/Dashboard.module.scss"
import WrapperStyles from "@/styles/Wrappers.module.scss"

import { UserCard } from "@/components/UserCard"
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn"
import { AuthButton } from "@/components/Login/AuthButton.client"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={LayoutStyles.DashboardLayout}>
            <header className={DashboardStyles.Header}>
                <div className={WrapperStyles.LogoContainer}>
                    <h2>Password Manager</h2>
                </div>
                <div className={DashboardStyles.HeaderContent}>
                    <CredentialsAddBtn text="ADD PASSWORD" />
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