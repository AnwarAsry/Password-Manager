"use client"

import { useState } from "react";
import { CredentialsForm } from "./CredentialsForm";

export const CredentialsAddBtn = () => {

    const [showForm, setShowForm] = useState(false);

    return <>
        <button onClick={() => setShowForm(true)}>Add Credentials</button>

        {showForm && <CredentialsForm Cancel={() => setShowForm(false)} />}
    </>
}