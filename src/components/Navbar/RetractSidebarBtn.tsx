"use client"

import { useSidebar } from "@/hooks/useSidebar"
import SidebarStyles from "@/styles/Menu/Sidebar.module.scss"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


export const RetractSidebarBtn = () => {
    const { toggleSidebar, isCollapsed } = useSidebar();
    return <>
        <button className={SidebarStyles.SidebarBtn} onClick={toggleSidebar}>
            {
                isCollapsed ? <IoIosArrowForward className={SidebarStyles.SidebarIcons} /> : <IoIosArrowBack className={SidebarStyles.SidebarIcons} />
            }
        </button>
    </>
}