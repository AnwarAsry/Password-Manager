import TableStyles from "@/styles/CredentialsTable.module.scss"

import { IAccounts } from "@/models/IAccounts";
import Link from "next/link";


interface TableRowProps {
    entity: IAccounts
}

export const TableRow = ({ entity }: TableRowProps) => {
    return <>
        <div className={TableStyles.TableRow}>
            <div className={TableStyles.TableRowFirstColumn}>
                <Link href={`/view/${entity.id}`}>{entity.platform}</Link>
                <span><a href={entity.linkUrl} target="_blank">{entity.linkUrl}</a></span>
            </div>
            <p>{entity.username}</p>
            <div>{entity.password && "*".repeat(entity.password.length)}</div>
        </div>
    </>
};