import ButtonStyles from "@/styles/Buttons.module.scss"
import FormStyles from "@/styles/Form.module.scss"
import WrapperStyles from "@/styles/Wrappers.module.scss"

import { updateCredential } from "@/actions/account";
import { FormInput } from "@/components/Forms/FormInput";
import { Tag } from "@/components/Tag";
import { IAccounts } from "@/models/IAccounts";

import { useState } from "react";


interface EditableFormProps {
    entityToEdit: IAccounts
    abort: () => void
    updatePageContent: (item: IAccounts) => void
}

export const EditableForm = ({ entityToEdit, abort, updatePageContent }: EditableFormProps) => {
    // State to handle what tags user has labeld
    const [categories, setCategories] = useState<string[]>(entityToEdit.category!);
    // Handle the value of the input
    const [tagInput, setTagInput] = useState<string>("");

    const handleUpdate = async (e: React.FormEvent) => {
        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            // Append the array as a single field
            formData.append("category", JSON.stringify(categories));

            const response = await updateCredential(entityToEdit.id, formData)

            if (response.success) {
                updatePageContent(response.data!)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Handle adding a new tag
    const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            setCategories([...categories, tagInput.trim()]); // Add tag
            setTagInput(""); // Clear input
        }
    };
    // Handle removing a tag
    const removeTag = (index: number) => {
        setCategories(categories.filter((tag, i) => i !== index));
    };

    return <>
        <form onSubmit={handleUpdate} className={FormStyles.UpdateCredentialForm}>
            <FormInput name="platform" label="Platform" type="text" defaultValue={entityToEdit.platform} />
            <FormInput name="username" label="Username/Email" type="text" defaultValue={entityToEdit.username} />
            <FormInput name="password" label="Password" type="password" defaultValue={entityToEdit.password} />

            <div>
                <label className={FormStyles.Label}>Notes</label>
                <textarea name="notes" className={FormStyles.Input} defaultValue={entityToEdit.notes}></textarea>
            </div>

            {/* The category field */}
            <FormInput label="Category" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={e => addTag(e)} />
            {/* Display the categories */}
            <div className={WrapperStyles.TagsContainer}>
                {
                    categories?.map((tag, i) => <Tag text={tag} key={i} Remove={() => removeTag(i)} />)
                }
            </div>

            <div className={ButtonStyles.BtnsContainer}>
                <button className={ButtonStyles.SecondaryBtn} type="button" onClick={abort}>Cancel</button>
                <button className={ButtonStyles.PrimaryBtn} type="submit">Save</button>
            </div>
        </form >
    </>
}