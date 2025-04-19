"use client"

import { useSidebar } from "@/hooks/useSidebar";
import SidebarStyles from "@/styles/Menu/Sidebar.module.scss"
import Link from "next/link"

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    label: string;
}

export const NavItem = ({ href, children, label }: NavItemProps) => {

    const { isCollapsed } = useSidebar();

    return <>
        <Link href={href} className={SidebarStyles.NavItem}>
            {children}

            <span className={`${SidebarStyles.NavItemText} ${isCollapsed ? SidebarStyles.NavItemTextCollapsed : ""}`}>{label}</span>

            {isCollapsed && (
                <span className={SidebarStyles.NavItemTextHover}>
                    {label}
                </span>
            )}
        </Link>
    </>;
}