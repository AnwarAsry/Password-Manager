import InputStyles from "@/styles/Form/Inputs.module.scss";
import { useState } from "react";
import { CopyBtn } from "../Buttons/CopyBtn";
import { GeneratePasswordBtn } from "../Buttons/GeneratePasswordBtn";
import { EyeBtn } from "../Buttons/EyeBtn";

export const PasswordInput = () => {
    const [password, setPassword] = useState<string>("");

    return (
        <div>
            <label className={InputStyles.Label}>Password</label>
            <div className={InputStyles.InputButtonContainer}>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={InputStyles.Input}
                    autoComplete="off"
                />
                <CopyBtn value={password} />
                <EyeBtn />
                <GeneratePasswordBtn assignToInput={setPassword} />
            </div>
        </div>
    );
};
