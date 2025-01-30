"use client"

import SearchBarStyles from "@/styles/SearchBar.module.scss"

import { getSearchResult } from "@/actions/account"
import { IAccounts } from "@/models/IAccounts"
import { SearchItem } from "./SearchItem"

import { useEffect, useRef, useState } from "react"

import { CiSearch } from "react-icons/ci"


export const SearchBar = () => {
    // Search results
    const [searchCredentials, setSearchCredentials] = useState<IAccounts[]>([])
    // Timer to keep track how long user is not typing
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // If the value is blank, empty results and end
        if (!e.target.value) {
            setSearchCredentials([])
            return
        }

        // Clear timer if there is one
        if (timerRef.current) clearTimeout(timerRef.current);

        // Create a timeout on 1000ms
        timerRef.current = setTimeout(async () => {
            try {
                // Fetch
                const response = await getSearchResult(e.target.value);
                // Check if success and has data
                if (response.success && response.data) {
                    setSearchCredentials(response.data)
                }

            } catch (error) {
                console.log("[Search error] Something happend while trying to fetch:", error);
            }
        }, 500);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [])

    return <>
        <div className={SearchBarStyles.SearchContainer}>
            <form className={SearchBarStyles.SearchForm}>
                <CiSearch className={SearchBarStyles.SearchIcon} />
                <input
                    className={SearchBarStyles.SearchInput}
                    type="text"
                    name="searchQuery"
                    placeholder="Search for platform"
                    onChange={handleSearchOnChange}
                    autoComplete="off"
                />
            </form>
            {searchCredentials.length > 0 && (
                <ul className={SearchBarStyles.SearchResults}>
                    {searchCredentials.map(({ id, platform, username }) => (
                        <SearchItem
                            key={id}
                            item={{
                                id: id,
                                platform: platform,
                                username: username
                            }}
                        />
                    ))}
                </ul>
            )}
        </div>
    </>
}