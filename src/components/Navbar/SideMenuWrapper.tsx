"use client"

import WrapperStyles from "@/styles/Wrappers.module.scss"


interface SideMenuProps {
    children: React.ReactNode
}

export const SideMenuWrapper = ({ children }: SideMenuProps) => {
    return <>
        <aside className={WrapperStyles.SideMenuWrapper}>
            {children}
        </aside>
    </>
}