"use client"

import NavbarStyles from "@/styles/Navbar.module.scss"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMenu } from "react-icons/io5"
import { NavItems } from "./NavItems"


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return <>
        <nav className={NavbarStyles.Navbar}>
            <div className={NavbarStyles.NavList}>
                <NavItems />
            </div>
            <div className={NavbarStyles.MenuIconCont}>
                <IoMenu className={NavbarStyles.MenuIcon} onClick={toggleNavbar} />
            </div>
        </nav>
    </>
}