"use client"

import CredentialPageStyles from "@/styles/CredentialPage.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss"
import { deleteCredential, getCredential } from "@/actions/account";
import { Tag } from "@/components/Tag";
import { ViewInputValue } from "@/components/ViewInputValue";
import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const CredentialPage = () => {

    const [loading, setLoading] = useState(false);
    const [pageInfo, setPageInfo] = useState<IAccounts | null>();

    const params = useParams<{ id: string }>();

    useEffect(() => {
        if (loading) return

        const getData = async () => {
            if (params) {
                const resposne = await getCredential(params.id)
                setPageInfo(resposne.data)
                setLoading(true)
            }
        }

        getData();
    }, [loading, params])

    const handleDelete = async (id: string) => {
        const response = await deleteCredential(id)
        if (response.success) {
            redirect("/dashboard")
        }
    }

    if (pageInfo) {
        return <>
            <header className={CredentialPageStyles.header}>
                <div className={CredentialPageStyles.BackLink}>
                    <IoArrowBackOutline className="icon" />
                    <Link href="/dashboard">Back to homepage</Link>
                </div>
            </header>
            <section className={CredentialPageStyles.Content}>
                <h3 className={CredentialPageStyles.TitlePlatform}>{pageInfo?.platform}</h3>
                <ViewInputValue label="Username/Email" type="text" defaultValue={pageInfo?.username} />
                <ViewInputValue label="Password" type="password" defaultValue={pageInfo?.password} />
                <label className={CredentialPageStyles.ViewTextarea}>
                    Notes:
                    <textarea disabled defaultValue={pageInfo?.notes}></textarea>
                </label>

                <div className={CredentialPageStyles.CategoriesSection}>
                    <label>Categories:</label>
                    <div className={CredentialPageStyles.Categories}>
                        {
                            pageInfo.category?.map((obj, i) => {
                                return <Tag key={i} text={obj} />
                            })
                        }
                    </div>
                </div>

                <button className={ButtonStyles.DeleteBtn} onClick={() => handleDelete(pageInfo.id)}>Delete</button>
            </section>
        </>
    }

    return <>
        <h1>No Data found</h1>
    </>
}

export default CredentialPage;