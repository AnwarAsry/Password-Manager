"use client"
import NavbarStyles from "@/styles/Navbar.module.scss"

import { useSidebar } from "@/hooks/useSidebar"

import Link from "next/link"
import { IoBookmarkOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5"


export const NavItems = () => {
    const { isCollapsed } = useSidebar();
    return <>
        <Link href="/dashboard" className={NavbarStyles.NavItem}>
            <IoHomeOutline className={NavbarStyles.NavItemIcon} />
            <span className={`${NavbarStyles.NavItemText} ${isCollapsed ? NavbarStyles.Collapsed : ""}`}>Home</span>
            {isCollapsed && (
                <div className={NavbarStyles.NavItemTextHover}>
                    Home
                </div>
            )}
        </Link>
        <Link href="/bookmark" className={NavbarStyles.NavItem}>
            <IoBookmarkOutline className={NavbarStyles.NavItemIcon} />
            <span className={`${NavbarStyles.NavItemText} ${isCollapsed ? NavbarStyles.Collapsed : ""}`}>Bookmark</span>
            {isCollapsed && (
                <div className={NavbarStyles.NavItemTextHover}>
                    Bookmark
                </div>
            )}
        </Link>
        <Link href="/settings" className={NavbarStyles.NavItem}>
            <IoSettingsOutline className={NavbarStyles.NavItemIcon} />
            <span className={`${NavbarStyles.NavItemText} ${isCollapsed ? NavbarStyles.Collapsed : ""}`}>Settings</span>
            {isCollapsed && (
                <div className={NavbarStyles.NavItemTextHover}>
                    Settings
                </div>
            )}
        </Link>
    </>
}