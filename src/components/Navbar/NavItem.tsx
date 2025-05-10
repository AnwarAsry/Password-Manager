"use client"

import SidebarStyles from "@styles/Menu/Sidebar.module.scss"
import Link from "next/link"

interface NavItemProps {
    href: string;
    children?: React.ReactNode;
    label: string;
}
export const NavItem = ({ href, children, label }: NavItemProps) => {
    return (
        <Link href={href} className={SidebarStyles.NavItem}>
            {children}
            <span className={SidebarStyles.NavItemText}>{label}</span>
        </Link>
    )
}