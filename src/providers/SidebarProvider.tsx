"use client";

import { SidebarContext } from "@context/SidebarContext";
import { useState } from "react";

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(prev => !prev);

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}