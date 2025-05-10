"use client";

import HeaderStyles from "@styles/Header.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SearchBar } from "./Search/SearchBar";
import { NavItem } from "./Navbar/NavItem";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessageCircleExclamation } from "react-icons/tb";
import { UserCard } from "./User/UserCard";
import { AuthLogin } from "./Auth/AuthLogin";

export default function Header() {
    const { data: session } = useSession();

    return (
        <header className={HeaderStyles.Header}>
            <Link href="/">
                <p className={HeaderStyles.LogoName}>
                    <span>Pass</span>Man
                </p>
            </Link>

            {session ? (
                <>
                    <SearchBar />
                    <UserCard />
                </>
            ) : (
                <>
                    <nav className={HeaderStyles.LandingNav}>
                        <NavItem href="/" label="Home">
                            <IoHomeOutline className={HeaderStyles.NavIcon} />
                        </NavItem>
                        <NavItem href="/about" label="About">
                            <TbMessageCircleExclamation className={HeaderStyles.NavIcon} />
                        </NavItem>
                    </nav>
                    <AuthLogin />
                </>
            )}
        </header>
    );
}
