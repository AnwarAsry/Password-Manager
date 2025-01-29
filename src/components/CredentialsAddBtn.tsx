"use client"

import { useState } from "react";
import { CredentialsForm } from "./Forms/CredentialsForm";
import ButtonStyles from "@/styles/Buttons.module.scss";
import { HiPlus } from "react-icons/hi";

interface ICredentialsAddBtnProps {
    text?: string
    addIcon?: boolean
}

export const CredentialsAddBtn = ({ text, addIcon }: ICredentialsAddBtnProps) => {

    const [showForm, setShowForm] = useState(false);

    return <>
        <button className={ButtonStyles.PrimaryBtn} onClick={() => setShowForm(true)}>
            {addIcon && <HiPlus />} {text}
        </button>

        {showForm && <CredentialsForm Cancel={() => setShowForm(false)} />}
    </>
}