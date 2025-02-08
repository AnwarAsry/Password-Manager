import NavbarStyles from "@/styles/Navbar.module.scss"

import Link from "next/link"
import { IoBookmarkOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5"


export const Navbar = () => {
    return <>
        <nav className={NavbarStyles.Navbar}>
            <div className={NavbarStyles.NavList}>
                <Link href="/dashboard" className={NavbarStyles.NavItem}>
                    <IoHomeOutline className={NavbarStyles.NavIcons} />
                    Home
                </Link>
                <Link href="/bookmark" className={NavbarStyles.NavItem}>
                    <IoBookmarkOutline className={NavbarStyles.NavIcons} />
                    Bookmark
                </Link>
                <Link href="/settings" className={NavbarStyles.NavItem}>
                    <IoSettingsOutline className={NavbarStyles.NavIcons} />
                    Settings
                </Link>
            </div>
        </nav>
    </>
}