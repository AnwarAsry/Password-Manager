"use client"

import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss";
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"
import { createCredential } from "@/actions/account"
import { useActionState, useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Tag } from "@/components/Tag"
import { randomBytes } from "crypto";

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {

    // Get the id of the current user in the session
    const { data: session } = useSession();

    // New react hook for form handling, used to be known as useFormState
    const [state, formAction, pending] = useActionState(createCredential, null)

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

    // Password State
    const [password, setPassword] = useState<string>("");

    // Password generate
    const generatePassword = () => {
        // A string of characters to use in the password
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789£€?!@#$%&()";
        // Generate random bytes equal to the password length
        const bytes = randomBytes(16);
        // An array to store characters
        const chars = [];
        // Map each byte to a character from the charset
        for (let i = 0; i < bytes.length; i++) {
            // Modulo ensure the byte maps to a valid index in the charset
            chars.push(charset[bytes[i] % charset.length]);
        }
        // Join characters to form the password
        const pass = chars.join('');
        // Set the value to the password state
        setPassword(pass)
    }

    return <>
        <div className={FormStyles.formBackground}>
            <form action={formAction} className={FormStyles.SubmitForm}>
                {/* Close form icon */}
                <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />

                {/* Inputs */}
                <FormInput label="Website" type="text" name="platform" />
                <FormInput label="Username/Email" type="text" name="username" />

                <FormInput label="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                {/* When pressing this button it changes the value in the password input to the generated password */}
                <button className={ButtonStyles.PrimaryBtn} type="button" onClick={generatePassword}>Generate password</button>

                <label className={FormStyles.LabelTextareaContainer}>
                    Note
                    <textarea name="notes" className={FormStyles.FormTextarea}></textarea>
                </label>

                {/* The category field */}
                <FormInput label="Category" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={e => addTag(e)} />
                {/* Display the categories */}
                <div className={FormStyles.tagsContainer}>
                    {
                        categories.map((tag, i) => <Tag text={tag} key={i} index={i} removeIcon Remove={() => removeTag(i)} />)
                    }
                </div>

                {/* Hidden fields. ONLY FOR TESTING NOT FOR PRODUCTION SHOULD BE REMOVED */}
                <input type="hidden" name="category" value={JSON.stringify(categories)} />
                <input type="hidden" value={session?.user.id} name="userID" />

                <hr />
                <div className={FormStyles.BtnsContainer}>
                    <button className={ButtonStyles.SecondaryBtn} type="button" onClick={Cancel}>Cancel</button>
                    <button className={ButtonStyles.PrimaryBtn} type="submit" disabled={pending}>Add</button>
                </div>
            </form>
        </div>
    </>
}