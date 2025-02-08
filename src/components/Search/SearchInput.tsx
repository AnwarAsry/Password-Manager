import SearchBarStyles from "@/styles/SearchBar.module.scss"

import { useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci"


interface SearchInputProps {
    onSearch: (query: string) => void
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
    // Timer to keep track how long user is not typing
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Clear timer if there is one
        if (timerRef.current) clearTimeout(timerRef.current);

        // Create a timeout on 800ms
        timerRef.current = setTimeout(async () => {
            try {
                // Trigger the fetch call here
                onSearch(e.target.value)
            } catch (error) {
                console.log("[Search error] Could not send query:", error);
            }
        }, 800);
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [])

    return <>
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
    </>
}