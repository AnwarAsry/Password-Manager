"use client"

import SidebarStyles from "@/styles/Menu/Sidebar.module.scss"

import { useSidebar } from "@/hooks/useSidebar"


interface SideMenuProps {
    children: React.ReactNode
}

export const SidebarWrapper = ({ children }: SideMenuProps) => {

    const { isCollapsed } = useSidebar();

    return <>
        <aside className={`${SidebarStyles.SidebarWrapper} ${isCollapsed ? SidebarStyles.SidebarWrapperColapsed : ""}`}>
            {children}
        </aside>
    </>
}