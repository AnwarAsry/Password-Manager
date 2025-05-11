"use client"

import InputStyles from '@styles/Form/Input.module.scss'
import { CopyBtn } from '@components/Buttons/CopyBtn'
import { EyeBtn } from '@components/Buttons/EyeBtn'
import { GeneratePasswordBtn } from '@components/Buttons/GeneratePasswordBtn'
import { useState } from 'react'

interface IPasswordInputProps {
    value: string;
    setValue: (value: string) => void;
}
export const PasswordInput = ({ value, setValue }: IPasswordInputProps) => {
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
        </div>
    )
}