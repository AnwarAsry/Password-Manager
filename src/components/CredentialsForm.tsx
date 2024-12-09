import FormStyles from "@/styles/Form.module.scss"
import { FormInput } from "./FormInput"

export const CredentialsForm = () => {
    return <>
        <form className={FormStyles.form}>
            <FormInput label="Website" type="text" />
            <FormInput label="Username/Email" type="text" />
            <FormInput label="Password" type="password" />

            <label className={FormStyles.Input}>
                Note:
                <textarea></textarea>
            </label>

            <button type="submit">Add</button>
        </form>
    </>
}