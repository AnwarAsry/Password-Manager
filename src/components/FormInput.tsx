import FormStyles from "@/styles/Form.module.scss"
import CredentialPageStyles from "@/styles/CredentialPage.module.scss"

interface IFormInputProps {
    viewOnly?: boolean
    label?: string
    type: string
    name?: string
    value?: string
    defaultValue?: string
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ viewOnly, label, type, name, value, defaultValue, required, onChange, onKeyDown }: IFormInputProps) => {
    if (viewOnly) {
        return <>
            <label className={CredentialPageStyles.ViewInput}>
                {label}
                <input type={type} disabled defaultValue={defaultValue} />
            </label>
        </>
    }

    return <>
        <label className={FormStyles.LabelContainer}>
            {label}
            <input className={FormStyles.Input} type={type} name={name} onChange={onChange} onKeyDown={onKeyDown} value={value} defaultValue={defaultValue} autoComplete="off" required={required}/>
        </label>
    </>
}