import { getAllCredentialsForUser } from "@/actions/account";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import tableStyles from "@/styles/CredentialsTable.module.scss"

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    const res = await getAllCredentialsForUser(session.user.id)

    if (session.user) {
        return <>
            <h1>Helloo Welcome!!!</h1>
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
                                return <tr key={obj.id} className={tableStyles.CredentialCard}>
                                    <td>{obj.platform}</td>
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