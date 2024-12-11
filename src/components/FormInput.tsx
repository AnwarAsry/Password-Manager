import FormStyles from "@/styles/Form.module.scss"

interface IFormInputProps {
    label: string
    type: string
    name: string
}

export const FormInput = ({ label, type, name }: IFormInputProps) => {
    return <>
        <label className={FormStyles.Input}>
            {label}
            <input type={type} name={name} />
        </label>
    </>
}