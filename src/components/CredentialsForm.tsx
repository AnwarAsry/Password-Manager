"use client"

import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss";

import { FormInput } from "./FormInput"
import { createCredential } from "@/actions/account"

import { IoIosClose } from "react-icons/io"
import { useActionState, useState } from "react"
import { useSession } from "next-auth/react"
import { randomBytes } from "crypto";

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    // Get the id of the current user in the session
    const { data: session } = useSession();

    const [state, formAction, isPending] = useActionState(createCredential, null);

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
        <div className={FormStyles.FormBackground}  >
            <form action={formAction} className={FormStyles.Form}>
                {/* Close form icon */}
                <div className={FormStyles.FormHeader}>
                    <IoIosClose className={FormStyles.CloseIcon} onClick={Cancel} />
                </div>

                <div className={FormStyles.FormContent}>
                    {/* Inputs */}
                    <FormInput label="Platform*" type="text" name="platform" placeholder="Enter the Platform name or website" />
                    <FormInput label="Url" type="text" name="linkUrl" placeholder="Enter link to the platform or website" />
                    <FormInput label="Username/Email address*" type="text" name="username" placeholder="Enter your Email Address or Username" />

                    <FormInput label="Password" type="password" name="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} />
                    {/* When pressing this button it changes the value in the password input to the generated password */}
                    <button className={ButtonStyles.PrimaryBtn} type="button" onClick={generatePassword} disabled={isPending}>Generate password</button>
                    <input type="hidden" name="userID" value={session?.user.id} />
                </div>
                <hr />
                <div className={FormStyles.FormFooter}>
                    <button className={ButtonStyles.SecondaryBtn} type="button" onClick={Cancel} disabled={isPending}>Cancel</button>
                    <button className={ButtonStyles.PrimaryBtn} type="submit" disabled={isPending}>Add</button>
                </div>
            </form>
        </div>
    </>
}