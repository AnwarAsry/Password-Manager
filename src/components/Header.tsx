import HeaderStyles from "@/styles/Header.module.scss"

import { SearchBar } from "./Search/SearchBar"


export const Header = () => {
    return <>
        <header className={HeaderStyles.Header}>
            <div className={HeaderStyles.SearchContainer}>
                <SearchBar />
            </div>
        </header >
    </>
}