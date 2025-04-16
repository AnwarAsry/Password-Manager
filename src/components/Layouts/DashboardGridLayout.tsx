"use client"

import { useSidebar } from "@/hooks/useSidebar";
import LayoutStyles from "@/styles/Layout.module.scss"

interface IDashboardLayoutProps {
    children: React.ReactNode
}

export const DashboardGridLayout = ({ children }: IDashboardLayoutProps) => {
    const { isCollapsed } = useSidebar();
    return (
        <div className={`${isCollapsed ? LayoutStyles.DashboardLayoutCollapsed : LayoutStyles.DashboardLayoutExpanded}`}>
            {children}
        </div>
    )
}