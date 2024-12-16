"use client"

import FormStyles from "@/styles/Form.module.scss"
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"
import { createAccount } from "@/actions/account"
import { useActionState, useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {

    // Get the id of the current user in the session
    const { data: session } = useSession();

    // New react hook for form handling, used to be known as useFormState
    const [state, formAction, pending] = useActionState(createAccount, null)

    // If successfull redirect to dashboard
    if (state) {
        redirect("/dashboard")
    }

    // State to handle what tags user has labeld
    const [categories, setCategories] = useState<string[]>([]);
    // Handle the value of the input
    const [tagInput, setTagInput] = useState<string>("");

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
        <div className={FormStyles.formBackground}>
            <form action={formAction} className={FormStyles.form}>
                <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />
                <FormInput label="Website" type="text" name="platform" />
                <FormInput label="Username/Email" type="text" name="username" />
                <FormInput label="Password" type="password" name="password" />

                <label className={FormStyles.Input}>
                    Note:
                    <textarea name="notes"></textarea>
                </label>

                {/* The category field */}
                <FormInput label="Category" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={e => addTag(e)} />
                {/* Display the categories */}
                <div className={FormStyles.tagsInput}>
                    {
                        categories.map((tag, index) => (
                            <span key={index} className={FormStyles.tag}>
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => removeTag(index)}
                                    className={FormStyles.removeTag}
                                >
                                    ×
                                </button>
                            </span>
                        ))
                    }
                </div>

                {/* Hidden fields. ONLY FOR TESTING NOT FOR PRODUCTION SHOULD BE REMOVED */}
                <input type="hidden" name="category" value={JSON.stringify(categories)} />
                <input type="hidden" value={session?.user.id} name="userID" />

                <button type="button" onClick={Cancel}>Cancel</button>
                <button type="submit" disabled={pending}>Add</button>
            </form>
        </div>
    </>
}