import LoginStyles from "@/styles/Layout.module.scss"

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className={LoginStyles.LoginLayout}>
            {children}
        </main>
    )
}