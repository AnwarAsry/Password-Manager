"use client"
import { SidebarContext, SidebarContextType } from "@/contexts/SideContext";
import { useContext } from "react";

// Hook for checking collapsed or not
export const useSidebar = () => {
    const context = useContext<SidebarContextType>(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within SidebarProvider");
    }
    return context;
};