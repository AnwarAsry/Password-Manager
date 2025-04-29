"use client"

import FormStyles from '@styles/Form/Form.module.scss'
import InputStyles from '@styles/Form/Input.module.scss'
import { createCredential } from '@actions/StoredCredentials'
import { FormState } from '@models/responses/ServerActions'
import { useRouter } from 'next/navigation'
import { useRef, useState, useActionState, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FormInput } from './FormInput'
import { FormFooter } from './FormFooter'
import { PasswordInput } from './PasswordInput'

interface IFormProps {
    Cancel?: () => void
}
export const AddEntryForm = ({ Cancel }: IFormProps) => {
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

    return (
        <div className={FormStyles.FormBackgroundLayer}>
            <form action={formAction} ref={formRef} className={FormStyles.Form}>
                <div className={FormStyles.FormHeader}>
                    <h2>Add new entry</h2>
                    <IoIosClose className={FormStyles.CloseIcon} onClick={Cancel} />
                </div>
                <div className={FormStyles.FormContent}>
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
                    />
                    {/* Notes */}
                    <div>
                        <label className={InputStyles.Label}>Note</label>
                        <textarea className={InputStyles.TextAreaInput} name="notes" />
                    </div>
                </div>
                <FormFooter isLoading={pending} onCancel={Cancel} />
            </form>
        </div>
    )
}