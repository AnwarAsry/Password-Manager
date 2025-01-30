import SearchBarStyles from "@/styles/SearchBar.module.scss"

import Link from "next/link"


interface SearchItemProps {
    item: {
        id: string
        platform: string
        username: string
    }
}

export const SearchItem = ({ item }: SearchItemProps) => {
    return <>
        <Link href={`view/${item.id}`} className={SearchBarStyles.Result}>
            <li>
                <div>
                    <p>Platform</p>
                    <span>{item.platform}</span>
                </div>
                <div>
                    <p>Username</p>
                    <span>{item.username}</span>
                </div>
            </li>
        </Link>
    </>
}