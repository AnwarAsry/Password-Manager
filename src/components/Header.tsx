import HeaderStyles from "@/styles/Header.module.scss"

import { AuthButton } from "./Login/AuthButton.client"
import { UserCard } from "./UserCard"


export const Header = () => {
    return <>
        <header className={HeaderStyles.Header}>
            <div className={HeaderStyles.LogoContainer}>
                <h2>Password Manager</h2>
            </div>
            <div className={HeaderStyles.HeaderContent}>
                <AuthButton />
            </div>
            <div>
                <hr className={HeaderStyles.LineBreak} />
                <UserCard />
            </div>
        </header >
    </>
}