"use client"

import ButtonStyles from "@/styles/Buttons.module.scss"
import FormStyles from "@/styles/Form.module.scss"

import { updateCredential } from "@/actions/account";
import { FormInput } from "../Inputs/FormInput";
import { IAccounts } from "@/models/IAccounts";

import { useActionState, useEffect, useState } from "react";
import { PasswordInput } from "../Inputs/PasswordInput";


interface EditableFormProps {
    entityToEdit: IAccounts
    abort: () => void
    updatePageContent: (item: IAccounts) => void
}

export const EditableForm = ({ entityToEdit, abort, updatePageContent }: EditableFormProps) => {

    const [password, setPassword] = useState<string>(entityToEdit.password || "");

    const initialState = {
        success: false,
        errors: {},
        message: '',
        data: undefined,
    };

    const updateAction = updateCredential(entityToEdit.id);
    const [state, formAction] = useActionState(updateAction, initialState);

    useEffect(() => {
        if (state?.success && state.data) {
            updatePageContent(state.data);
            abort();
        }
    }, [state, updatePageContent, abort]);

    return <>
        <form action={formAction} className={FormStyles.UpdateCredentialForm}>
            <FormInput name="platform" label="Platform" type="text" defaultValue={entityToEdit.platform} />
            <FormInput name="linkUrl" label="Website" type="url" defaultValue={entityToEdit.linkUrl} />
            <FormInput name="username" label="Username" type="text" defaultValue={entityToEdit.username} />
            <FormInput name="email" label="Email" type="email" defaultValue={entityToEdit.email} />
            {/* <FormInput name="password" label="Password" type="password" defaultValue={entityToEdit.password} /> */}
            <PasswordInput value={password} setValue={setPassword} />

            <div className={FormStyles.FormControl}>
                <label className={FormStyles.Label}>Notes</label>
                <textarea name="notes" className={FormStyles.TextAreaInput} defaultValue={entityToEdit.notes}></textarea>
            </div>

            <div className={ButtonStyles.BtnsContainer}>
                <button className={ButtonStyles.SecondaryBtn} type="button" onClick={abort}>Cancel</button>
                <button className={ButtonStyles.PrimaryBtn} type="submit">Save</button>
            </div>
        </form >
    </>
}