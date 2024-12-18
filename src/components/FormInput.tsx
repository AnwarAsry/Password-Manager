import FormStyles from "@/styles/Form.module.scss"

interface IFormInputProps {
    label?: string
    type: string
    name?: string
    value?: string
    defaultValue?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ label, type, name, value, defaultValue, onChange, onKeyDown }: IFormInputProps) => {
    return <>
        <label className={FormStyles.LabelContainer}>
            {label}
            <input className={FormStyles.Input} type={type} name={name} onChange={onChange} onKeyDown={onKeyDown} value={value} defaultValue={defaultValue} />
        </label>
    </>
}