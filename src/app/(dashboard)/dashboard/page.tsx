import { getAllCredentialsForUser } from "@/actions/account";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import TableStyles from "@/styles/CredentialsTable.module.scss"
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
        return
    }

    const res = await getAllCredentialsForUser(session.user.id)

    return <>
        <SearchBar />
        <section>
            <div className={TableStyles.TitleCallToAction}>
                <h5 className={TableStyles.Title}>All passwords <span className={TableStyles.NumberOfRowSpan}>{res.data && res.data.length}</span></h5>
                <CredentialsAddBtn addIcon />
            </div>
            <table className={TableStyles.tableCredentials}>
                <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        res.data?.map(obj => {
                            return <tr key={obj.id} className={TableStyles.CredentialCard}>
                                <td>
                                    <Link href={`/view/${obj.id}`}>{obj.platform}</Link>
                                    <span><a href={obj.linkUrl} target="_blank">{obj.linkUrl}</a></span>
                                </td>
                                <td>{obj.username}</td>
                                <td>{obj.password && "*".repeat(obj.password.length)}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section >
    </>
}

export default Dashboard;