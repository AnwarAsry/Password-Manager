"use client"

import CredentialPageStyles from "@/styles/CredentialPage.module.scss";
import DashboardStyles from "@/styles/Dashboard.module.scss";

import { deleteCredential, getCredential } from "@/actions/account";
import { IAccounts } from "@/models/IAccounts";
import { BackLink } from "@/components/BackLink";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { Spinner } from "@/components/Spinner";
import { EditableForm } from "@/components/EditableForm";
import { CredentialView } from "@/components/CredentialPage/CredentialView";

import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CredentialPage = () => {
    // Check if there is a session and user
    const { isLoading } = useAuthRedirect(); // use the isLoading for the data fetch

    // The object for this page state
    const [pageInfo, setPageInfo] = useState<IAccounts | null>();
    // State for if page is fetching data
    const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
    // State to enable changes to the object
    const [isEditing, setIsEditing] = useState<boolean>(false);

    // Parameter for id
    const params = useParams<{ id: string }>();

    // Get the data for this page
    useEffect(() => {
        if (!isLoading) return

        const getData = async () => {
            setIsPageLoading(true);
            // If parameter exist
            if (params.id) {
                try {
                    const response = await getCredential(params.id)

                    if (response.success && response.data) {
                        setPageInfo(response.data)
                    }
                } catch (error) {
                    console.log("Something went wrong with updating. Error message: ", error);
                } finally {
                    setIsPageLoading(false);
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

    return <>
        <header className={DashboardStyles.HeaderInMain}>
            <BackLink hrefLink="/dashboard" text="Back to dashboard" />
        </header>
        <section className={CredentialPageStyles.Content}>
            <Spinner loading={isLoading || isPageLoading} />

            {!isEditing && pageInfo && <CredentialView entity={pageInfo} edit={() => setIsEditing(true)} deleteFn={handleDelete} />}

            {isEditing && pageInfo && <EditableForm entityToEdit={pageInfo} abort={() => setIsEditing(false)} updatePageContent={setPageInfo} />}

            {!isPageLoading && !pageInfo && <h1>No Data Found</h1>}
        </section >
    </>
}

export default CredentialPage;