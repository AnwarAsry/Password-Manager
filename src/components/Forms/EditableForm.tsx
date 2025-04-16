import ButtonStyles from "@/styles/Buttons.module.scss"
import FormStyles from "@/styles/Form.module.scss"

import { updateCredential } from "@/actions/account";
import { FormInput } from "../Inputs/FormInput";
import { IAccounts } from "@/models/IAccounts";

import { useState } from "react";


interface EditableFormProps {
    entityToEdit: IAccounts
    abort: () => void
    updatePageContent: (item: IAccounts) => void
}

export const EditableForm = ({ entityToEdit, abort, updatePageContent }: EditableFormProps) => {
    // Handle the value of the input
    const [tagInput, setTagInput] = useState<string>("");

    const handleUpdate = async (e: React.FormEvent) => {
        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);

            const response = await updateCredential(entityToEdit.id, formData)

            if (response.success) {
                updatePageContent(response.data!)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <form onSubmit={handleUpdate} className={FormStyles.UpdateCredentialForm}>
            <FormInput name="platform" label="Platform" type="text" value={entityToEdit.platform} />
            <FormInput name="linkUrl" label="Website" type="url" value={entityToEdit.linkUrl} />
            <FormInput name="username" label="Username" type="text" value={entityToEdit.username} />
            <FormInput name="email" label="Email" type="email" value={entityToEdit.email} />
            <FormInput name="password" label="Password" type="password" value={entityToEdit.password} />

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