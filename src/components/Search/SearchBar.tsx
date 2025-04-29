"use client"

import SearchBarStyles from '@styles/Search.module.scss'
import { SearchInput } from './SearchInput'
import { useState } from 'react'
import { StoredCredential } from '@prismaModels'
import { getSearchResult } from '@actions/StoredCredentials'
import { SearchItem } from './SearchItem'

export const SearchBar = () => {
    // Search results
    const [searchCredentials, setSearchCredentials] = useState<StoredCredential[]>([])

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

    return (
        <div className={SearchBarStyles.SearchContainer}>
            <SearchInput onSearch={fetchCredentials} />

            {searchCredentials.length > 0 && (
                <div className={SearchBarStyles.SearchResults}>
                    {searchCredentials.map((credential) => (
                        <SearchItem
                            key={credential.id}
                            clickAction={() => setSearchCredentials([])}
                            item={{
                                id: credential.id,
                                platform: credential.platform,
                                email: credential.email,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}