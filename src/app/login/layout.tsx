import LayoutStyles from "@/styles/Layout.module.scss"

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className={LayoutStyles.LoginLayout}>
            {children}
        </main>
    )
}