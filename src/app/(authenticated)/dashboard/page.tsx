import TableStyles from '@styles/Table.module.scss'
import { getAllCredentialsForUser } from '@actions/StoredCredentials'
import { SessionValidate } from "@lib/SessionValidate"
import { CredentialsTable } from '@components/Table/CredentialsTable'
import { TableRow } from '@components/Table/TableRow'
import { AddEntryBtn } from '@components/Buttons/AddEntryBtn'

const Dashboard = async () => {
    const session = await SessionValidate();

    const res = await getAllCredentialsForUser(session.user?.id as string);

    return (
        <section>
            <div className={TableStyles.TitleAndFilter}>
                <h2 className={TableStyles.Title}>
                    Saved Credentials
                    {res.data && <span className={TableStyles.NumberOfRowSpan}>{res.data.length}</span>}
                </h2>
                <AddEntryBtn />
            </div>

            <CredentialsTable>
                {res.data?.map(item => <TableRow key={item.id} entity={item} />)}
            </CredentialsTable>
        </section>
    )
}

export default Dashboard;