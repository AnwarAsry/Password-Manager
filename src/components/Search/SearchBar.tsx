"use client"

import SearchBarStyles from "@/styles/SearchBar.module.scss"

import { getSearchResult } from "@/actions/account"
import { IAccounts } from "@/models/IAccounts"
import { SearchItem } from "./SearchItem"
import { SearchInput } from "./SearchInput"

import { useState } from "react"


export const SearchBar = () => {
    // Search results
    const [searchCredentials, setSearchCredentials] = useState<IAccounts[]>([])

    const fetchCredentials = async (seacrhValue?: string) => {
        if (seacrhValue) {
            try {
                const response = await getSearchResult(seacrhValue);
                if (response.success && response.data) {
                    setSearchCredentials(response.data);
                }
            } catch (error) {
                console.log("[Search error] Something happend while trying to fetch:", error);
            }
        } else {
            // If value is empty remove the resluts
            setSearchCredentials([]);
        }
    };

    return <>
        <div className={SearchBarStyles.SearchContainer}>
            <SearchInput onSearch={fetchCredentials} />
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