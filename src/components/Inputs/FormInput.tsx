import InputStyles from "@/styles/Form/Inputs.module.scss";
import ButtonStyles from "@/styles/Buttons.module.scss";
import { FiExternalLink } from "react-icons/fi";
import { LinkBtn } from "../Buttons/LinkBtn";

interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasExternalLink?: boolean;
    required?: boolean;
    error?: string;
}

export const FormInput = ({ label, name, type = "text", placeholder, value, onChange, hasExternalLink, required, error }: IFormInputProps) => {
    return <>
        <div>
            <label className={InputStyles.Label}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={InputStyles.Input}
                autoComplete="off"
                required={required}
            />
            {hasExternalLink && value && (
                <LinkBtn value={value} />
            )}

            {error && <p className={InputStyles.ErrorText}>{error}</p>}
        </div>
    </>
};
