"use client"
import { createContext } from "react";

export type SidebarContextType = {
    isCollapsed: boolean,
    toggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarContextType>({
    isCollapsed: false,
    toggleSidebar: () => {}
});