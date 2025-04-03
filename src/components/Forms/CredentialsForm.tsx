"use client"

import FormStyles from "@/styles/Form.module.scss"

import { createCredential } from "@/actions/account"

import { IoIosClose } from "react-icons/io"
import { useCallback, useState } from "react"
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

    // Get the id of the current user in the session
    const { data: session } = useSession();
    const [isPending, setIsPending] = useState<boolean>(false);


    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!session?.user) return console.error("No session ID");

        setIsPending(true);
        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            formData.append("userID", session.user.id);

            const response = await createCredential(formData);
            if (response.success) {
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
            <form onSubmit={handleSubmit} className={FormStyles.Form}>
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
                        />
                        {/* Email */}
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="something@some.com"
                        />
                        {/* Username */}
                        <FormInput
                            label="Username"
                            name="username"
                            placeholder="Enter your username"
                        />
                        {/* Password */}
                        <PasswordInput />
                        {/* Website Link */}
                        <FormInput
                            label="Website"
                            type="url"
                            name="linkUrl"
                            placeholder="Enter link to the platform or website"
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