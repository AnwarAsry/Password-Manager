"use client"

import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss";
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"
import { createCredential } from "@/actions/account"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { randomBytes } from "crypto";
import { useRouter } from "next/navigation";

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    // Get the id of the current user in the session
    const { data: session } = useSession();

    const router = useRouter();

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

    // If form submission is pending state
    const [pending, setPending] = useState(false);
    // Handle submit function
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Set pending state true
            setPending(true)

            const formData = new FormData(e.currentTarget as HTMLFormElement);
            // Append the array as a single field
            formData.append("userID", session!.user.id);

            const response = await createCredential(formData);

            if (response.success) {
                Cancel()
                router.push("/dashboard")
            }

        } catch (error) {
            console.log("Error submitting form:", error);
        } finally {
            // Reset pending state
            setPending(false);
        }
    }

    return <>
        <div className={FormStyles.formBackground}  >
            <form onSubmit={handleSubmit} className={FormStyles.SubmitForm}>
                {/* Close form icon */}
                <div className={FormStyles.FormHeader}>
                    <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />
                </div>

                {/* Inputs */}
                <FormInput label="Platform*" type="text" name="platform" />
                <FormInput label="Email*" type="email" name="username" />

                <FormInput label="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                {/* When pressing this button it changes the value in the password input to the generated password */}
                <button className={ButtonStyles.PrimaryBtn} type="button" onClick={generatePassword}>Generate password</button>

                <hr />
                <div className={FormStyles.BtnsContainer}>
                    <button className={ButtonStyles.SecondaryBtn} type="button" onClick={Cancel}>Cancel</button>
                    <button className={ButtonStyles.PrimaryBtn} type="submit" disabled={pending}>Add</button>
                </div>
            </form>
        </div>
    </>
}