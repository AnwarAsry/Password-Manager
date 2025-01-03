import Link from "next/link"
import LinksStyles from "@/styles/Links.module.scss"
import { IoArrowBackOutline } from "react-icons/io5"

interface IBackLinkProps {
    hrefLink: string
    text: string
}

export const BackLink = ({ hrefLink, text }: IBackLinkProps) => {

    return <>
        <div className={LinksStyles.BackLink}>
            <IoArrowBackOutline className="icon" />
            <Link href={hrefLink}>{text}</Link>
        </div>
    </>
}