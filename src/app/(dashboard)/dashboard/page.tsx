import { getAllCredentialsForUser } from "@/actions/account";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import tableStyles from "@/styles/CredentialsTable.module.scss"
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    const res = await getAllCredentialsForUser(session.user.id)

    if (session.user) {
        return <>
            <SearchBar />
            <section>
                <h5 className={tableStyles.Title}>All saved passwords</h5>
                <table className={tableStyles.tableCredentials}>
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
                                console.log(obj.id);

                                return <tr key={obj.id} className={tableStyles.CredentialCard}>
                                    <td><Link href={`/view/${obj.id}`}>{obj.platform}</Link></td>
                                    <td>{obj.username}</td>
                                    <td>{obj.password}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </section >
        </>
    }
}

export default Dashboard;