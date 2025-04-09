"use client"

import FormStyles from "@/styles/Form.module.scss"

import { createCredential } from "@/actions/account"

import { IoIosClose } from "react-icons/io"
import { useCallback, useRef, useState } from "react"
import { useSession } from "next-auth/react"

import { useRouter } from "next/navigation";
import { UploadImage } from "./UploadImage";
import { FormInput } from "../Inputs/FormInput";
import { PasswordInput } from "../Inputs/PasswordInput";
import { FormFooter } from "./FormFooter";


interface IFormProps {
    Cancel?: () => void
}

export const CredentialsForm = ({ Cancel }: IFormProps) => {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Get the id of the current user in the session
    const { data: session } = useSession();
    const [isPending, setIsPending] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!session?.user) return console.error("No session ID");

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const platform = formData.get("platform")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const password = formData.get("password")?.toString().trim();

        const newErrors: Record<string, string> = {};

        // Platform required
        if (!platform) newErrors.platform = "Platform is required";

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Password required
        if (!password) newErrors.password = "Password is required";

        // If there are errors, stop the form and display them
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsPending(true);

        try {
            formData.append("userID", session.user.id);

            const response = await createCredential(formData);

            if (response.success) {
                formRef.current?.reset();
                setPassword("");
                router.refresh();
                if (Cancel) Cancel();
            }
        } catch (err) {
            console.error("FAILED TO ADD NEW CREDENTIAL", err);
        } finally {
            setIsPending(false);
        }
    }, [session, Cancel, router]);

    return <>
        <div className={FormStyles.FormBackgroundLayer}>
            <form ref={formRef} onSubmit={handleSubmit} className={FormStyles.Form}>
                {/* Close form icon */}
                <div className={FormStyles.FormContent}>
                    <div className={FormStyles.FormHeader}>
                        {/* Image and name of platform */}
                        <div className={FormStyles.InputsContainerAlt}>
                            <UploadImage />
                            {/* Have Platform and link showcase */}
                        </div>
                        <IoIosClose className={FormStyles.CloseIcon} onClick={Cancel} />
                    </div>

                    <div className={FormStyles.InputsContainer}>
                        {/* Platform */}
                        <FormInput
                            label="Platform"
                            name="platform"
                            placeholder="Platform"
                            required
                            error={errors.platform}
                        />
                        {/* Email */}
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="something@some.com"
                            required
                            error={errors.email}
                        />
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
                            error={errors.password}
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

                <FormFooter isLoading={isPending} onCancel={Cancel} />
            </form>
        </div>
    </>
}