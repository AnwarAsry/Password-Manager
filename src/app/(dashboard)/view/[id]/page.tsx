"use client"

import { getCredential } from "@/actions/account";
import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";
import { useParams } from "next/navigation";
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

    </>
}

export default CredentialPage;