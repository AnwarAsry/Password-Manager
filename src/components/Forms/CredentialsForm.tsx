"use client"

import FormStyles from "@/styles/Form.module.scss"
import InputStyles from "@/styles/Form/Inputs.module.scss"

import { createCredential } from "@/actions/account"

import { IoIosClose } from "react-icons/io"
import { useActionState, useEffect, useRef, useState } from "react"

import { useRouter } from "next/navigation";
import { FormInput } from "../Inputs/FormInput";
import { PasswordInput } from "../Inputs/PasswordInput";
import { FormFooter } from "./FormFooter";
import { FormState } from "@/models/responses/ServerAction"


interface IFormProps {
    Cancel?: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [password, setPassword] = useState<string>("");

    const initialState: FormState = {
        success: false,
        message: "",
        errors: {},
    };

    const [state, formAction, pending] = useActionState(createCredential, initialState);

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset();
            setPassword("");
            router.refresh();
            if (Cancel) Cancel();
        }
    }, [state]);

    return <>
        <div className={FormStyles.FormBackgroundLayer}>
            <form action={formAction} ref={formRef} className={FormStyles.Form}>
                {/* Close form icon */}
                <div className={FormStyles.FormContent}>
                    <div className={FormStyles.FormHeader}>
                        <h2>Add new entry</h2>
                        <IoIosClose className={FormStyles.CloseIcon} onClick={Cancel} />
                    </div>

                    <div className={FormStyles.InputsContainer}>
                        {/* Platform */}
                        <FormInput
                            label="Platform"
                            name="platform"
                            placeholder="Platform"
                            required
                        />
                        {state?.errors?.platform && (<p className={InputStyles.ErrorText}>{state.errors.platform}</p>)}
                        {/* Email */}
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="something@some.com"
                            required
                        />
                        {state?.errors?.email && (<p className={InputStyles.ErrorText}>{state.errors.email}</p>)}
                        {/* Username */}
                        <FormInput
                            label="Username"
                            name="username"
                            placeholder="Enter your username"
                        />
                        {/* Password */}
                        <PasswordInput
                            value={password}
                            setValue={setPassword}
                        />
                        {/* Website Link */}
                        <FormInput
                            label="Website"
                            type="url"
                            name="linkUrl"
                            placeholder="https://www.example.com"
                            hasExternalLink
                        />
                        {/* Notes */}
                        <div>
                            <label className={FormStyles.Label}>Note</label>
                            <textarea className={FormStyles.TextAreaInput} name="notes"></textarea>
                        </div>
                    </div>
                </div>

                <FormFooter isLoading={pending} onCancel={Cancel} />
            </form>
        </div>
    </>
}