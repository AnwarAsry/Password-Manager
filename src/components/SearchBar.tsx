"use client"

import { getSearchResult } from "@/actions/account"
import { IAccounts } from "@/models/IAccounts"
import SearchBarStyles from "@/styles/Form.module.scss"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { IoSearch } from "react-icons/io5"

export const SearchBar = () => {
    const [searchCredentials, setSearchCredentials] = useState<IAccounts[] | null>([])

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
                    // Check if success
                    if (response.success) {
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
                <IoSearch className={SearchBarStyles.SerchIcon} />
                <input className={SearchBarStyles.SearchInput} type="text" name="searchQuery" placeholder="Search for platform..." defaultValue={search} onChange={handleSearchOnChange} />
            </form>
            <div>
                {
                    searchCredentials?.map(obj => {
                        return <div key={obj.id}>
                            <p>{obj.platform}</p>
                            <p>{obj.username}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}