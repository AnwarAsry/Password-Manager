import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";
import TableStyles from "@/styles/CredentialsTable.module.scss"

interface TableRowProps {
    entity: IAccounts
}

export const TableRow = ({ entity }: TableRowProps) => {
    return <>
        <tr className={TableStyles.CredentialCard}>
            <td>
                <Link href={`/view/${entity.id}`}>{entity.platform}</Link>
                <span><a href={entity.linkUrl} target="_blank">{entity.linkUrl}</a></span>
            </td>
            <td>{entity.username}</td>
            <td>{entity.password && "*".repeat(entity.password.length)}</td>
        </tr>
    </>
};