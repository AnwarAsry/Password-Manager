import { IAccounts } from "@/models/IAccounts";
import { TableRow } from "./TableRow";
import TableStyles from "@/styles/CredentialsTable.module.scss"

interface CredentialsTableProps {
    entitys: IAccounts[]
}

export const CredentialsTable = ({ entitys }: CredentialsTableProps) => {
    return <>
        <table className={TableStyles.tableCredentials}>
            <thead>
                <tr>
                    <th>Platform</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {entitys.map(item => <TableRow key={item.id} entity={item} />)}
            </tbody>
        </table>
    </>
};