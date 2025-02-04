import NavbarStyles from "@/styles/Navbar.module.scss"
import Link from "next/link"


export const Navbar = () => {
    return <>
        <nav className={NavbarStyles.Navbar}>
            <div className={NavbarStyles.NavList}>
                <Link href="/" className={NavbarStyles.NavItem}>
                    Home
                </Link>
                <Link href="/" className={NavbarStyles.NavItem}>
                    Bookmark
                </Link>
                <Link href="/" className={NavbarStyles.NavItem}>
                    Settings
                </Link>
            </div>
        </nav>
    </>
}