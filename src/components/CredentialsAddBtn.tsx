"use client"

import { useState } from "react";
import { CredentialsForm } from "./CredentialsForm";
import ButtonStyles from "@/styles/Buttons.module.scss";

export const CredentialsAddBtn = () => {

    const [showForm, setShowForm] = useState(false);

    return <>
        <button className={ButtonStyles.PrimaryBtn} onClick={() => setShowForm(true)}>Add Credentials</button>

        {showForm && <CredentialsForm Cancel={() => setShowForm(false)} />}
    </>
}