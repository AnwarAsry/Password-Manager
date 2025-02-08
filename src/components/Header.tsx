import HeaderStyles from "@/styles/Header.module.scss"

import { AuthButton } from "./Login/AuthButton.client"
import { UserCard } from "./UserCard"
import { Navbar } from "./Navbar/Navbar"


export const Header = () => {
    return <>
        <header className={HeaderStyles.Header}>
            <div className={HeaderStyles.LogoContainer}>
                <h2>Password Manager</h2>
            </div>
            <div className={HeaderStyles.HeaderContent}>
                <Navbar />
                <AuthButton />
            </div>
            <div>
                <hr className={HeaderStyles.LineBreak} />
                <UserCard />
            </div>
        </header >
    </>
}