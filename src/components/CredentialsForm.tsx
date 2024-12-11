"use client"

import FormStyles from "@/styles/Form.module.scss"
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"
import { createAccount } from "@/actions/account"
import { useActionState } from "react"
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

    return <>
        <div className={FormStyles.formBackground}>
            <form action={formAction} className={FormStyles.form}>
                <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />
                <FormInput label="Website" type="text" name="platform" />
                <FormInput label="Username/Email" type="text" name="username" />
                <FormInput label="Password" type="password" name="password" />

                {/* This should be removed, only for testing not for production */}
                <input type="hidden" value={session?.user.id} name="userID" />

                <label className={FormStyles.Input}>
                    Note:
                    <textarea name="notes"></textarea>
                </label>

                <button type="button" onClick={Cancel}>Cancel</button>
                <button type="submit" disabled={pending}>Add</button>
            </form>
        </div>
    </>
}