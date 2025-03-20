"use client"

import { useSidebar } from "@/hooks/useSidebar"
import SidebarStyles from "@/styles/Menu/Sidebar.module.scss"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


export const RetractSidebarBtn = () => {
    const { toggleSidebar, isCollapsed } = useSidebar();
    return <>
        <div className={`${SidebarStyles.TopContainer} ${isCollapsed ? SidebarStyles.TopContainerCollapsed : ""}`}>
            <p className={`${SidebarStyles.LogoName} ${isCollapsed ? SidebarStyles.LogoNameHide : ""}`}>PasswordManager</p>
            <button className={SidebarStyles.SidebarBtn} onClick={toggleSidebar}>
                {
                    isCollapsed ? <IoIosArrowForward className={SidebarStyles.SidebarBtnIcon} /> : <IoIosArrowBack className={SidebarStyles.SidebarBtnIcon} />
                }
            </button>
        </div>
    </>
}