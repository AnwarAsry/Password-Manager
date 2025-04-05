"use client"

import ButtonStyles from "@/styles/Buttons.module.scss"
import { FaCopy } from "react-icons/fa6"

export const CopyBtn = ({ value }: { value: string }) => {

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value)
    }

    return <>
        <button
            type="button"
            className={ButtonStyles.CopyBtn}
            onClick={() => copyToClipboard()}
        >
            <FaCopy className={ButtonStyles.BtnIcon} />
        </button>
    </>
}