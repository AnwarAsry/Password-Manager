import SearchBarStyles from '@styles/Search.module.scss'
import Link from 'next/link'

interface SearchItemProps {
    clickAction?: () => void
    item: {
        id: string
        platform: string
        email: string
    }
}
export const SearchItem = ({ item, clickAction }: SearchItemProps) => {
    return (
        <Link href={`dashboard/view/${item.id}`} className={SearchBarStyles.SearchResultItem} onClick={clickAction}>
            <div>
                <p>Platform</p>
                <span>{item.platform}</span>
            </div>
            <div>
                <p>Email</p>
                <span>{item.email}</span>
            </div>
        </Link>
    )
}