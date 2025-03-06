import WrapperStyles from "@/styles/Wrappers.module.scss"


interface SideMenuProps {
    children: React.ReactNode
}

export const SideMenuWrapper = ({ children }: SideMenuProps) => {
    return <>
        <section className={WrapperStyles.SideMenuWrapper}>
            {children}
        </section>
    </>
}