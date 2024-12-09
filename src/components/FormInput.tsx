import FormStyles from "@/styles/Form.module.scss"

interface IFormInputProps {
    label: string
    type: string
}

export const FormInput = ({ label, type }: IFormInputProps) => {
    return <>
        <label className={FormStyles.Input}>
            {label}
            <input type={type} />
        </label>
    </>
}