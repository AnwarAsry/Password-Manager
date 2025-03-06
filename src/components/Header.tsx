import HeaderStyles from "@/styles/Header.module.scss"

import { UserCard } from "./UserCard"
import { Navbar } from "./Navbar/Navbar"


export const Header = () => {
    return <>
        <header className={HeaderStyles.Header}>
            <UserCard />
            <hr className={HeaderStyles.Divider} />
            <Navbar />
        </header >
    </>
}