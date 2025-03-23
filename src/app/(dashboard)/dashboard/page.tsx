import TableStyles from "@/styles/CredentialsTable.module.scss";
import DashboardStyles from "@/styles/Dashboard.module.scss";
import TagStyles from "@/styles/Tag.module.scss";

import { getAllCredentialsForUser } from "@/actions/account";
import { validateSession } from "@/utils/ValidateSession";

import { CredentialsTable } from "@/components/Table/CredentialsTable";
import { TableRow } from "@/components/Table/TableRow";

const Dashboard = async () => {
    const session = await validateSession();

    const res = await getAllCredentialsForUser(session.user.id)

    return <>
        <section className={DashboardStyles.AllCredentialsSection}>
            <div className={TableStyles.TitleCallToAction}>
                <h5 className={TableStyles.Title}>
                    Passwords
                    <span className={TagStyles.NumberOfRowSpan}>{res.data?.length}</span>
                </h5>
            </div>

            <CredentialsTable>
                {res.data?.map(item => <TableRow key={item.id} entity={item} />)}
            </CredentialsTable>
        </section>
    </>
}

export default Dashboard;