import FormStyles from "@/styles/Form.module.scss"

interface IFormInputProps {
    label?: string
    type: string
    name?: string
    placeholder?: string
    value?: string
    defaultValue?: string
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ label, type, name, placeholder, value, defaultValue, required, onChange, onKeyDown }: IFormInputProps) => {

    return <>
        <div className={FormStyles.FormControl}>
            <label className={FormStyles.Label}> {label} </label>
            <input className={FormStyles.Input} type={type} name={name} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} defaultValue={defaultValue} autoComplete="off" required={required} />
        </div>
    </>
}