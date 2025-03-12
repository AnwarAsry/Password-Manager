"use client"

import { useSidebar } from "@/hooks/useSidebar"
import NavbarStyles from "@/styles/Navbar.module.scss"

import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg"


export const RetractSidebarBtn = () => {
    const { toggleSidebar, isCollapsed } = useSidebar();
    return <>
        <div className={`${NavbarStyles.MenuContainer} ${isCollapsed ? NavbarStyles.MenuContainerCollapsed : ""}`}>
            {isCollapsed ? <CgPushChevronRight className={NavbarStyles.MenuIcon} onClick={toggleSidebar} /> : <CgPushChevronLeft className={NavbarStyles.MenuIcon} onClick={toggleSidebar} />}
        </div>
    </>
}