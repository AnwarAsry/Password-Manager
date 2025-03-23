"use client"

import ButtonStyles from "@/styles/Buttons.module.scss"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

export const EyeBtn = () => {
    return <>
        <button className={ButtonStyles.EyeBtn}>
            <FaRegEye className={ButtonStyles.BtnIcon} />
            <FaRegEyeSlash className={ButtonStyles.BtnIcon} />
        </button>
    </>
}