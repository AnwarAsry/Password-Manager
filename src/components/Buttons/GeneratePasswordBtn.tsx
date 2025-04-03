"use client"

import ButtonStyles from "@/styles/Buttons.module.scss";
import { randomBytes } from "crypto";
import { useCallback } from "react";
import { MdOutlineLockReset } from "react-icons/md";

interface IGeneratePasswordBtnProps {
    assignToInput: (value: string) => void
}

export const GeneratePasswordBtn = ({ assignToInput }: IGeneratePasswordBtnProps) => {
    // Password generate
    const generatePassword = useCallback(() => {
        // A string of characters to use in the password
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789£€?!@#$%&()";
        // Generate random bytes equal to the password length
        const bytes = randomBytes(16);
        // Map each byte to a character from the charset
        // Modulo ensure the byte maps to a valid index in the charset
        const chars = Array.from(bytes).map(byte => charset[byte % charset.length]);
        // Join characters to form the password
        const pass = chars.join('');
        // Set the value to the password state
        assignToInput(pass);
    }, []);

    return <>
        <button
            type="button"
            className={ButtonStyles.GeneratePass}
            onClick={generatePassword}
        >
            <MdOutlineLockReset className={ButtonStyles.BtnIcon} />
        </button>
    </>
}