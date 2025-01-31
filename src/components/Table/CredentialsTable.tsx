import TableStyles from "@/styles/CredentialsTable.module.scss"

import { IAccounts } from "@/models/IAccounts";
import { TableRow } from "./TableRow";


interface CredentialsTableProps {
    entitys: IAccounts[]
}

export const CredentialsTable = ({ entitys }: CredentialsTableProps) => {
    return <>
        <section className={TableStyles.Table}>
            <div className={TableStyles.TableHead}>
                <p>Platform</p>
                <p>Username</p>
                <p>Password</p>
            </div>
            {
                entitys.map(item => <TableRow key={item.id} entity={item} />)
            }
        </section>
    </>
};