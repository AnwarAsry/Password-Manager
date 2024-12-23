"use client"

import { getCredential } from "@/actions/account";
import { Tag } from "@/components/Tag";
import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { platform } from "os";
import { useEffect, useState } from "react";

const CredentialPage = () => {

    const [loading, setLoading] = useState(false);
    const [pageInfo, setPageInfo] = useState<IAccounts | null>();

    const { id } = useParams();

    useEffect(() => {
        if (loading) return

        const hej = async () => {
            const resposne = await getCredential(id)
            setPageInfo(resposne.data)
            setLoading(true)
        }

        hej();
    })

    return <>
        <Link href="/dashboard">Back to homepage</Link>
        <h3>{pageInfo?.platform}</h3>
        <div>
            <label>
                Username/Email:
                <input type="text" disabled defaultValue={pageInfo?.username} />
            </label>
            <label>
                Password:
                <input type="password" disabled defaultValue={pageInfo?.password} />
            </label>
        </div>
        <label>
            Notes:
            <textarea disabled defaultValue={pageInfo?.notes}></textarea>
        </label>

        <div>
            <label>Taggs:</label>
            {
                pageInfo?.category?.map((obj, i) => {
                    return <Tag key={i} text={obj} />
                })
            }
        </div>
    </>
}

export default CredentialPage;