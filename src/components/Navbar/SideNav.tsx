import NavbarStyles from "@/styles/Menu/Navbar.module.scss"
import { NavItem } from "./NavItem"
import { IoHomeOutline, IoBookmarkOutline, IoSettingsOutline } from "react-icons/io5"

export const SideNav = () => {
    return <>
        <nav className={NavbarStyles.NavList}>
            <NavItem href={"/dashboard"} label="Home" >
                <IoHomeOutline className={NavbarStyles.NavItemIcon} />
            </NavItem>
            <NavItem href={"/bookmark"} label="Bookmarks" >
                <IoBookmarkOutline className={NavbarStyles.NavItemIcon} />
            </NavItem>
            <NavItem href={"/settings"} label="Settings" >
                <IoSettingsOutline className={NavbarStyles.NavItemIcon} />
            </NavItem>
        </nav>
    </>
}