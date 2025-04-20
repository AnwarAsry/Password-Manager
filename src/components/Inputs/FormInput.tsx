import InputStyles from "@/styles/Form/Inputs.module.scss";
import { LinkBtn } from "../Buttons/LinkBtn";

interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasExternalLink?: boolean;
    required?: boolean;
}

export const FormInput = ({ label, name, type = "text", placeholder, value, defaultValue, onChange, hasExternalLink, required }: IFormInputProps) => {
    return <>
        <div>
            <label className={InputStyles.Label}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                className={InputStyles.Input}
                autoComplete="off"
                required={required}
            />
            {hasExternalLink && value && (
                <LinkBtn value={value} />
            )}

        </div>
    </>
};
