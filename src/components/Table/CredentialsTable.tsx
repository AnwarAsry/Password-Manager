import TableStyles from "@/styles/CredentialsTable.module.scss"


export const CredentialsTable = ({
    children
}: {
    children: React.ReactNode
}) => {
    return <>
        <table className={TableStyles.Table}>
            <thead className={TableStyles.TableHead}>
                <tr>
                    <th>Platform</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody className={TableStyles.TableBody}>
                {children}
            </tbody>
        </table>
    </>
};