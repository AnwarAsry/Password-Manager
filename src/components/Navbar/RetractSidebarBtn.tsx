"use client"

import SidebarStyles from "@styles/Menu/Sidebar.module.scss"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { SidebarContext } from "@context/SidebarContext"
import { useContext } from "react"

export const RetractSidebarBtn = () => {
    const { isCollapsed, toggleSidebar } = useContext(SidebarContext);
    return (
        <button className={SidebarStyles.SidebarBtn} onClick={toggleSidebar}>
            {
                isCollapsed ? <IoIosArrowForward className={SidebarStyles.SidebarIcons} /> : <IoIosArrowBack className={SidebarStyles.SidebarIcons} />
            }
        </button>
    )
}