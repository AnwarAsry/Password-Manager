"use client"

import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss";

import { FormInput } from "./FormInput"
import { createCredential } from "@/actions/account"

import { IoIosClose } from "react-icons/io"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { randomBytes } from "crypto";
import { useRouter } from "next/navigation";


interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    const router = useRouter();

    // Get the id of the current user in the session
    const { data: session } = useSession();
    const [isPending, setIsPending] = useState<boolean>(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsPending(true);

            if (session?.user) {
                const formData = new FormData(e.currentTarget as HTMLFormElement);

                formData.append("userID", session.user.id)

                const response = await createCredential(formData)

                if (response.success) {
                    router.refresh();
                    Cancel();
                }
            }

            console.error("No session id");
        } catch (err) {
            console.log("FAILED TO ADD NEW CREDENTIAL", err);
        } finally {
            setIsPending(false);
        }
    }

    return <>
        <div className={FormStyles.FormBackgroundLayer}>
            <form onSubmit={handleSubmit} className={FormStyles.Form}>
                {/* Close form icon */}
                <div className={FormStyles.FormHeader}>
                    <h1>Add new credential to save</h1>
                    <IoIosClose className={FormStyles.CloseIcon} onClick={Cancel} />
                </div>

                <div className={FormStyles.FormContent}>
                    {/* Inputs */}
                    <FormInput
                        label="Platform*"
                        type="text"
                        name="platform"
                        placeholder="Enter the Platform name or website"
                    />

                    <FormInput
                        label="Website URL"
                        type="url"
                        name="linkUrl"
                        placeholder="Enter link to the platform or website"
                    />

                    <FormInput
                        label="Username/Email address*"
                        type="text"
                        name="username"
                        placeholder="Enter your Email Address or Username"
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        showButton
                        buttonText="Generate password"
                        btnAction={generatePassword}
                    />

                    <div className={`${FormStyles.FormControl} ${FormStyles.InputSpan}`}>
                        <label className={FormStyles.Label}>Note</label>
                        <textarea className={FormStyles.TextAreaInput} name="notes"></textarea>
                    </div>
                </div>

                <div className={FormStyles.FormFooter}>
                    <button className={ButtonStyles.SecondaryBtn} type="button" onClick={Cancel} disabled={isPending}>Cancel</button>
                    <button className={ButtonStyles.PrimaryBtn} type="submit" disabled={isPending}>Save credential</button>
                </div>
            </form>
        </div>
    </>
}