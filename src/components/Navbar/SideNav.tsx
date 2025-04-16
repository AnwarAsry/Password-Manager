import SidbarStyles from "@/styles/Menu/Sidebar.module.scss"

import { NavItem } from "./NavItem"
import { IoHomeOutline, IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5"

export const SideNav = () => {
    return (
        <nav className={SidbarStyles.NavList}>
            <NavItem href={"/dashboard"} label="Home" >
                <IoHomeOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
            <NavItem href={"/bookmark"} label="Bookmarks" >
                <IoBookmarkOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
            <NavItem href={"/settings"} label="Settings" >
                <IoSettingsOutline className={SidbarStyles.SidebarIcons} />
            </NavItem>
        </nav>
    )
}