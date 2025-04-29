import InputStyles from '@styles/Form/Input.module.scss'

interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}
export const FormInput = ({ label, name, type = "text", placeholder, value, defaultValue, onChange, required }: IFormInputProps) => {
    return (
        <div>
            <label className={InputStyles.Label}>{label}</label>
            <input
                className={InputStyles.Input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                autoComplete="off"
                required={required}
            />
        </div>
    )
};
