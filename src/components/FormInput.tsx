import FormStyles from "@/styles/Form.module.scss"

interface IFormInputProps {
    label: string
    type: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ label, type, name, value, onChange, onKeyDown }: IFormInputProps) => {
    return <>
        <label className={FormStyles.Input}>
            {label}
            <input type={type} name={name} onChange={onChange} onKeyDown={onKeyDown} value={value}/>
        </label>
    </>
}