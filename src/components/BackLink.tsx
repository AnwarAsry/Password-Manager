import { IoArrowBackOutline } from "react-icons/io5"

import Link from "next/link"


interface IBackLinkProps {
    hrefLink: string
    text: string
}

export const BackLink = ({ hrefLink, text }: IBackLinkProps) => {

    return <>
        <div className="BackLink">
            <IoArrowBackOutline className="icon" />
            <Link href={hrefLink}>{text}</Link>
        </div>
    </>
}