import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"


interface IFormInputProps {
    label?: string
    type: string
    name?: string
    placeholder?: string
    showButton?: boolean
    buttonText?: string
    btnAction?: () => void
    value?: string
    defaultValue?: string
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ label, type, name, placeholder, showButton, buttonText, btnAction, value, defaultValue, required, onChange, onKeyDown }: IFormInputProps) => {

    return <>
        <div className={FormStyles.FormControl}>
            <label className={FormStyles.Label}> {label} </label>
            <div className={FormStyles.InputButtonContainer}>
                <input className={FormStyles.Input} type={type} name={name} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} value={value} defaultValue={defaultValue} autoComplete="off" required={required} />
                {showButton && <button className={ButtonStyles.InputBtn} type="button" onClick={btnAction}>{buttonText}</button>}
            </div>
        </div>
    </>
}