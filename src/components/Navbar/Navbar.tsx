"use client"

import NavbarStyles from "@/styles/Navbar.module.scss"

import { useEffect, useState } from "react"
import { NavItems } from "./NavItems"
import { usePathname } from "next/navigation"


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname()

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
        </nav>
    </>
}