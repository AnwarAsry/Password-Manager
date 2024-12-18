"use client"

import SearchBarStyles from "@/styles/Form.module.scss"
import { useSearchParams } from "next/navigation"
import { IoSearch } from "react-icons/io5"

export const SearchBar = () => {
    // Get the URLSearchParams Object
    const searchParams = useSearchParams()

    // Get the search query and turn it to string
    const search = searchParams?.get('searchQuery')?.toString()

    return <>
        <div className={SearchBarStyles.SearchContainer}>
            <form action="/dashboard/results" className={SearchBarStyles.SearchForm}>
                <IoSearch className={SearchBarStyles.SerchIcon} />
                <input type="text" name="searchQuery" defaultValue={search} className={SearchBarStyles.SearchInput} placeholder="Search for platform..." />
            </form>
        </div>
    </>
}