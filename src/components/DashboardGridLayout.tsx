"use client"

import LayoutStyles from "@styles/Layout.module.scss"
import { useContext } from "react";
import { SidebarContext } from "@context/SidebarContext";

interface IDashboardLayoutProps {
    children: React.ReactNode
}
export const DashboardGridLayout = ({ children }: IDashboardLayoutProps) => {
    const { isCollapsed } = useContext(SidebarContext);
    return (
        <div className={`${isCollapsed ? LayoutStyles.DashboardLayoutCollapsed : LayoutStyles.DashboardLayoutExpanded}`}>
            {children}
        </div>
    )
}