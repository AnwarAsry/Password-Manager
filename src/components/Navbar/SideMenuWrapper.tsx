"use client"

import { useSidebar } from "@/hooks/useSidebar"
import WrapperStyles from "@/styles/Wrappers.module.scss"


interface SideMenuProps {
    children: React.ReactNode
}

export const SideMenuWrapper = ({ children }: SideMenuProps) => {

    const { isCollapsed } = useSidebar();

    return <>
        <aside className={`${WrapperStyles.SideMenuWrapper} ${isCollapsed ? WrapperStyles.SideMenuWrapperColapsed : ""}`}>
            {children}
        </aside>
    </>
}