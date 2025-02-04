import NavbarStyles from "@/styles/Navbar.module.scss"


export const Navbar = () => {
    return <>
        <nav>
            <ul className={NavbarStyles.NavList}>
                <li>Home</li>
                <li>Bookmark</li>
                <li>Settings</li>
            </ul>
        </nav>
    </>
}