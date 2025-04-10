import InputStyles from "@/styles/Form/Inputs.module.scss";
import { useState } from "react";
import { CopyBtn } from "../Buttons/CopyBtn";
import { GeneratePasswordBtn } from "../Buttons/GeneratePasswordBtn";
import { EyeBtn } from "../Buttons/EyeBtn";

interface IPasswordInputProps {
    value: string;
    setValue: (value: string) => void;
    error?: string;
}

export const PasswordInput = ({ value, setValue, error }: IPasswordInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div>
            <label className={InputStyles.Label}>Password</label>
            <div className={InputStyles.InputButtonContainer}>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter your password"
                    className={InputStyles.Input}
                    autoComplete="off"
                    required
                />
                <CopyBtn value={value} />
                <EyeBtn showValueAction={() => setIsPasswordVisible(prev => !prev)} showValue={isPasswordVisible} />
                <GeneratePasswordBtn assignToInput={setValue} />
            </div>
            {error && <p className={InputStyles.ErrorText}>{error}</p>}
        </div>
    );
};
