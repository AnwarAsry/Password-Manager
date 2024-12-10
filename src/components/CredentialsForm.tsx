import FormStyles from "@/styles/Form.module.scss"
import { FormInput } from "./FormInput"
import { IoIosClose } from "react-icons/io"

interface IFormProps {
    Cancel: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {

    return <>
        <div className={FormStyles.formBackground}>
            <form className={FormStyles.form}>
                <IoIosClose className={FormStyles.closeIcon} onClick={Cancel} />
                <FormInput label="Website" type="text" />
                <FormInput label="Username/Email" type="text" />
                <FormInput label="Password" type="password" />

                <label className={FormStyles.Input}>
                    Note:
                    <textarea></textarea>
                </label>

                <button type="button" onClick={Cancel}>Cancel</button>
                <button type="submit">Add</button>
            </form>
        </div>
    </>
}