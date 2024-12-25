"use client"

import CredentialPageStyles from "@/styles/CredentialPage.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"
import FormStyles from "@/styles/Form.module.scss"
import { deleteCredential, getCredential, updateCredential } from "@/actions/account";
import { Tag } from "@/components/Tag";
import { ViewInputValue } from "@/components/ViewInputValue";
import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FormInput } from "@/components/FormInput";

const CredentialPage = () => {

    // loading state
    const [loading, setLoading] = useState(false);
    // The object for this page state
    const [pageInfo, setPageInfo] = useState<IAccounts | null>();
    // State to enable changes to the object
    const [edit, setEdit] = useState<boolean>(false);

    // Parameter for id
    const params = useParams<{ id: string }>();

    const handleUpdate = async (formData: FormData) => {
        if (pageInfo) {
            try {
                console.log(formData);

                const response = await updateCredential(pageInfo.id, formData)

                if (response.success) {
                    // redirect("/dashboard")
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
        if (loading) return

        const getData = async () => {
            // If parameter exist
            if (params) {
                const resposne = await getCredential(params.id)
                setPageInfo(resposne.data)
                setLoading(true)
            }
        }

        getData();
    }, [loading, params])

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
                <div className={CredentialPageStyles.BackLink}>
                    <IoArrowBackOutline className="icon" />
                    <Link href="/dashboard">Back to homepage</Link>
                </div>
            </header>
            <section className={CredentialPageStyles.Content}>
                {
                    edit && <form action={handleUpdate} className={FormStyles.SubmitFormAlt}>
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
                                categories.map((tag, i) => <Tag text={tag} key={i} index={i} removeIcon Remove={() => removeTag(i)} />)
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
                    !edit && <ViewInputValue label="Username/Email" type="text" defaultValue={pageInfo.username} />
                }
                {
                    !edit && <ViewInputValue label="Password" type="password" defaultValue={pageInfo.password} />
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
                        <button className={ButtonStyles.PrimaryBtn} onClick={() => setEdit(true)}><FiEdit /> Edit Credential</button>
                    </div>
                }
            </section >
        </>
    }

    // If there is no object
    return <>
        <h1>No Data found</h1>
    </>
}

export default CredentialPage;