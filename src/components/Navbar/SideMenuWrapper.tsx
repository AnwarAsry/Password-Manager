"use client"

import WrapperStyles from "@/styles/Wrappers.module.scss"

import { SideBarContext } from "@/contexts/SideBarContext"

import { useState } from "react"


interface SideMenuProps {
    children: React.ReactNode
}

export const SideMenuWrapper = ({ children }: SideMenuProps) => {
    const [expanded, setExpanded] = useState(false);

    return <>
        <section className={WrapperStyles.SideMenuWrapper}>
            <SideBarContext.Provider value={{ expanded }}>
                {children}
            </SideBarContext.Provider>
        </section>
    </>
}