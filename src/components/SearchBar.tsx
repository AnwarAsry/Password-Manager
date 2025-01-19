"use client"

import SearchBarStyles from "@/styles/Form.module.scss"
import { getSearchResult } from "@/actions/account"
import { IAccounts } from "@/models/IAccounts"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import Link from "next/link"

export const SearchBar = () => {
    // Search results
    const [searchCredentials, setSearchCredentials] = useState<IAccounts[]>([])

    // Timer to keep track how long user is not typing
    const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);

    // Get the URLSearchParams Object
    const searchParams = useSearchParams()

    // Get the search query and turn it to string
    const search = searchParams?.get('searchQuery')?.toString()

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // If the value is blank do nothing
        if (!e.target.value) return

        // Clear timer if there is one
        if (timer) {
            clearTimeout(timer);
        }

        // Then set a new timer
        setTimer(
            // Create a timeout on 1000ms
            setTimeout(async () => {
                try {
                    // Fetch
                    const response = await getSearchResult(e.target.value);
                    // Check if success and has data
                    if (response.success && response.data) {
                        setSearchCredentials(response.data)
                    }

                } catch (error) {
                    console.log(error);
                }
            }, 1000)
        );
    }

    return <>
        <div className={SearchBarStyles.SearchContainer}>
            <form action="/results" className={SearchBarStyles.SearchForm}>
                <input className={SearchBarStyles.SearchInput} type="text" name="searchQuery" placeholder="Search for platform" defaultValue={search} onChange={handleSearchOnChange} autoComplete="off" />
                <IoSearch className={SearchBarStyles.SearchIcon} />
            </form>
            {
                searchCredentials?.length > 0 && <ul className={SearchBarStyles.SearchResults}>
                    {
                        searchCredentials.map(obj => {
                            return <Link key={obj.id} href={`view/${obj.id}`}>
                                <li className={SearchBarStyles.Result} >
                                    <div>
                                        <p>Platform</p>
                                        <span>{obj.platform}</span>
                                    </div>
                                    <div>
                                        <p>Username</p>
                                        <span>{obj.email}</span>
                                    </div>
                                </li>
                            </Link>
                        })
                    }
                </ul>
            }
        </div>
    </>
}