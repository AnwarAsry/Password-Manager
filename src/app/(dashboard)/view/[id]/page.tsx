"use client"

import CredentialPageStyles from "@/styles/CredentialPage.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"
import FormStyles from "@/styles/Form.module.scss"
import { deleteCredential, getCredential, updateCredential } from "@/actions/account";
import { Tag } from "@/components/Tag";
import { IAccounts } from "@/models/IAccounts";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FormInput } from "@/components/FormInput";
import { BackLink } from "@/components/BackLink";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

const CredentialPage = () => {
    // Check if there is a session and user
    const { isLoading } = useAuthRedirect(); // use the isLoading for the data fetch

    // The object for this page state
    const [pageInfo, setPageInfo] = useState<IAccounts | null>();
    // State to enable changes to the object
    const [edit, setEdit] = useState<boolean>(false);

    // Parameter for id
    const params = useParams<{ id: string }>();

    const handleUpdate = async (e: React.FormEvent) => {
        if (pageInfo) {
            try {
                const formData = new FormData(e.currentTarget as HTMLFormElement);
                // Append the array as a single field
                formData.append("category", JSON.stringify(categories));

                const response = await updateCredential(pageInfo.id, formData)

                if (response.success) {
                    setPageInfo(response.data)
                    setEdit(false)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    // State to handle what tags user has labeld
    const [categories, setCategories] = useState<string[]>([]);
    // Handle the value of the input
    const [tagInput, setTagInput] = useState<string>("");

    // Handle adding a new tag
    const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            setCategories([...categories, tagInput.trim()]); // Add tag
            setTagInput(""); // Clear input
        }
    };
    // Handle removing a tag
    const removeTag = (index: number) => {
        setCategories(categories.filter((tag, i) => i !== index));
    };

    // Get the data for this page
    useEffect(() => {
        if (!isLoading) return

        const getData = async () => {
            // If parameter exist
            if (params) {
                try {
                    const response = await getCredential(params.id)

                    if (response.success && response.data) {
                        setPageInfo(response.data)
                        setCategories(response.data.category || [])
                    }
                } catch (error) {
                    console.log("Something went wrong with updating. Error message: ", error);
                }
            }
        }

        getData();
    }, [isLoading, params])

    // handleDelete function when clicking the delete button
    const handleDelete = async (id: string) => {
        // Delete object
        const response = await deleteCredential(id)
        // If successfull go back to dashboard
        if (response.success) {
            redirect("/dashboard")
        }
    }

    // If object exist
    if (pageInfo) {
        return <>
            <header className={CredentialPageStyles.header}>
                <BackLink hrefLink="/dashboard" text="Back to dashboard" />
            </header>
            <section className={CredentialPageStyles.Content}>
                {
                    edit && <form onSubmit={handleUpdate} className={FormStyles.SubmitFormAlt}>
                        <FormInput name="platform" label="Platform" type="text" defaultValue={pageInfo.platform} />
                        <FormInput name="username" label="Username/Email" type="text" defaultValue={pageInfo.username} />
                        <FormInput name="password" label="Password" type="password" defaultValue={pageInfo.password} />

                        <label className={FormStyles.LabelTextareaContainer}>
                            Notes:
                            <textarea name="notes" className={FormStyles.FormTextarea} defaultValue={pageInfo.notes}></textarea>
                        </label>

                        {/* The category field */}
                        <FormInput label="Category" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={e => addTag(e)} />
                        {/* Display the categories */}
                        <div className={FormStyles.tagsContainer}>
                            {
                                categories?.map((tag, i) => <Tag text={tag} key={i} Remove={() => removeTag(i)} />)
                            }
                        </div>

                        <hr />
                        <div className={FormStyles.BtnsContainer}>
                            <button className={ButtonStyles.SecondaryBtn} type="button" onClick={() => setEdit(false)}>Cancel</button>
                            <button className={ButtonStyles.PrimaryBtn} type="submit">Save</button>
                        </div>
                    </form>
                }

                {
                    !edit && <h3 className={CredentialPageStyles.TitlePlatform}>{pageInfo.platform}</h3>
                }
                {
                    !edit && <FormInput viewOnly label="Username/Email" type="text" defaultValue={pageInfo.username} />
                }
                {
                    !edit && <FormInput viewOnly label="Password" type="password" defaultValue={pageInfo.password} />
                }

                {
                    !edit && <label className={CredentialPageStyles.ViewTextarea}>
                        Notes:
                        <textarea disabled defaultValue={pageInfo.notes}></textarea>
                    </label>
                }

                {
                    !edit && <div className={CredentialPageStyles.CategoriesSection}>
                        <label>Categories:</label>
                        <div className={CredentialPageStyles.Categories}>
                            {
                                pageInfo.category?.map((obj, i) => {
                                    return <Tag key={i} text={obj} />
                                })
                            }
                        </div>
                    </div>
                }

                {
                    !edit && <div className={FormStyles.BtnsContainer}>
                        <button className={ButtonStyles.DeleteBtn} onClick={() => handleDelete(pageInfo.id)}>Delete</button>
                        <button className={ButtonStyles.PrimaryBtn} onClick={() => setEdit(true)}><FiEdit /> Edit</button>
                    </div>
                }
            </section >
        </>
    }

    // If there is no object
    return <>
        {isLoading && <h1>Loading..</h1>}
        {!pageInfo && !isLoading && <h1>No Data Found</h1>}
    </>
}

export default CredentialPage;