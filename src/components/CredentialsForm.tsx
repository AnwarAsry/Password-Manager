import FormStyles from "@/styles/Form.module.scss"
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"
import { createAccount } from "@/actions/account"
import { useActionState } from "react"

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    // const [formState, action] = useFormState(createAccount, {
    //     success: false,
    //     message: "",
    // });

    const [state, formAction, pending] = useActionState(createAccount, null)

    if (state) {
        console.log("JIPPIES");
    }

    return <>
        <div className={FormStyles.formBackground}>
            <form action={formAction} className={FormStyles.form}>
                <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />
                <FormInput label="Website" type="text" />
                <FormInput label="Username/Email" type="text" />
                <FormInput label="Password" type="password" />

                <label className={FormStyles.Input}>
                    Note:
                    <textarea></textarea>
                </label>

                <button type="button" onClick={Cancel}>Cancel</button>
                <button type="submit" disabled={pending}>Add</button>
            </form>
        </div>
    </>
}