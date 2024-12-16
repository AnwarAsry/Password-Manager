import { getAllCredentialsForUser } from "@/actions/account";
import { auth } from "@/auth";
import { Tag } from "@/components/Tag";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/")
    }

    const res = await getAllCredentialsForUser(session.user.id)

    if (session.user) {
        return <>
            <h1>Helloo Welcome!!!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Category</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        res.data?.map(obj => {
                            return <tr key={obj.id}>
                                <td>{obj.platform}</td>
                                <td>{obj.category?.map((tag, i) => <Tag key={i} text={tag} />)}</td>
                                <td>{obj.username}</td>
                                <td>{obj.password}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    }
}

export default Dashboard;