import LoginStyles from "@/styles/login.module.scss"

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className={LoginStyles.loginLayout}>
            {children}
        </main>
    )
}