"use client"
import HeaderStyles from "@/styles/Header.module.scss"
import NavbarStyles from "@/styles/Navbar.module.scss"

import { IoMenu } from "react-icons/io5"
import { SearchBar } from "./Search/SearchBar"
import { useSidebar } from "@/hooks/useSidebar"


export const Header = () => {

    const { toggleSidebar } = useSidebar();

    return <>
        <header className={HeaderStyles.Header}>
            <div className={HeaderStyles.MenuContainer}>
                <IoMenu className={NavbarStyles.MenuIcon} onClick={toggleSidebar} />
            </div>
            <div className={HeaderStyles.SearchContainer}>
                <SearchBar />
            </div>
        </header >
    </>
}