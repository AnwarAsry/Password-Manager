"use client"

import { useSidebar } from "@/hooks/useSidebar";
import NavbarStyles from "@/styles/Menu/Navbar.module.scss"
import Link from "next/link"

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    label: string;
}

export const NavItem = ({ href, children, label }: NavItemProps) => {

    const { isCollapsed } = useSidebar();

    return <>
        <Link href={href} className={`${NavbarStyles.NavItem} ${isCollapsed ? NavbarStyles.NavItemCollapsed : ""}`}>
            {children}

            <span className={isCollapsed ? NavbarStyles.NavItemTextCollapsed : ""}>{label}</span>

            {isCollapsed && (
                <span className={NavbarStyles.NavItemTextHover}>
                    {label}
                </span>
            )}
        </Link>
    </>;
}