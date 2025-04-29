"use client"

import SidbarStyles from "@styles/Menu/Sidebar.module.scss"
import { NavItem } from "./NavItem"
import { IoHomeOutline, IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5"
import { SidebarContext } from "@context/SidebarContext"
import { useContext } from "react"

export const SideNav = () => {
    const { isCollapsed } = useContext(SidebarContext);
    return (
        <nav className={`${SidbarStyles.NavList} ${isCollapsed ? SidbarStyles.NavListCollapsed : ""}`}>
            <NavItem href={"/dashboard"} label="Home" >
                <IoHomeOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
            <NavItem href={"/bookmarks"} label="Bookmarks" >
                <IoBookmarkOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
            <NavItem href={"/settings"} label="Settings" >
                <IoSettingsOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
        </nav>
    )
}