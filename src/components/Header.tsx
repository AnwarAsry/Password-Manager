import HeaderStyles from "@/styles/Header.module.scss"
import NavbarStyles from "@/styles/Navbar.module.scss"

import { IoMenu } from "react-icons/io5"
import { SearchBar } from "./Search/SearchBar"


export const Header = () => {
    return <>
        <header className={HeaderStyles.Header}>
            <div className={HeaderStyles.MenuContainer}>
                <IoMenu className={NavbarStyles.MenuIcon} />
            </div>
            <div className={HeaderStyles.SearchContainer}>
                <SearchBar />
            </div>
        </header >
    </>
}