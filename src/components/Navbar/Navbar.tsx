import NavbarStyles from "@/styles/Navbar.module.scss"

import Link from "next/link"


export const Navbar = () => {
    return <>
        <nav className={NavbarStyles.Navbar}>
            <div className={NavbarStyles.NavList}>
                <Link href="/dashboard" className={NavbarStyles.NavItem}>
                    Home
                </Link>
                <Link href="/bookmark" className={NavbarStyles.NavItem}>
                    Bookmark
                </Link>
                <Link href="/settings" className={NavbarStyles.NavItem}>
                    Settings
                </Link>
            </div>
        </nav>
    </>
}