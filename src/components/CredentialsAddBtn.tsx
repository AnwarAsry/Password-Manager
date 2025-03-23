import ButtonStyles from "@/styles/Buttons.module.scss";

import { HiPlus } from "react-icons/hi";

interface ICredentialsAddBtnProps {
    text?: string
    addIcon?: boolean
}

export const CredentialsAddBtn = ({ text, addIcon }: ICredentialsAddBtnProps) => {
    return <>
        <button className={ButtonStyles.PrimaryBtn}>
            {addIcon && <HiPlus className={ButtonStyles.BtnIcon} />}
            {text}
        </button>
    </>
}