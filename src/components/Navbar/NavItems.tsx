import { SideBarContext } from "@/contexts/SideBarContext"
import NavbarStyles from "@/styles/Navbar.module.scss"

import Link from "next/link"
import { useContext } from "react"
import { IoBookmarkOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5"


export const NavItems = () => {
    const { expanded } = useContext(SideBarContext);

    return <>
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
    </>
}