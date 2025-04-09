"use client"

import ButtonStyles from "@/styles/Buttons.module.scss";
import { HiPlus } from "react-icons/hi";
import { CredentialsForm } from "./Forms/CredentialsForm";
import { useState } from "react";

interface ICredentialsAddBtnProps {
    text?: string
    addIcon?: boolean
}

export const CredentialsAddBtn = ({ text, addIcon }: ICredentialsAddBtnProps) => {

    const [showForm, setShowForm] = useState(false);

    return <>
        <button className={ButtonStyles.PrimaryBtn} onClick={() => setShowForm(true)}>
            {addIcon && <HiPlus className={ButtonStyles.BtnIcon} />}
            {text}
        </button>
        {showForm && <CredentialsForm Cancel={() => setShowForm(false)} />}
    </>
}