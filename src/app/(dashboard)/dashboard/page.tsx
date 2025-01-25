import TableStyles from "@/styles/CredentialsTable.module.scss";
import TagStyles from "@/styles/Tag.module.scss";
import DashboardStyles from "@/styles/Dashboard.module.scss";

import { getAllCredentialsForUser } from "@/actions/account";

import { SearchBar } from "@/components/SearchBar";
import { validateSession } from "@/utils/ValidateSession";
import { CredentialsTable } from "@/components/Table/CredentialsTable";
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn";

const Dashboard = async () => {
    const session = await validateSession();

    const res = await getAllCredentialsForUser(session.user.id)

    return <>
        <header className={DashboardStyles.HeaderInMain}>
            <SearchBar />
        </header>
        <section>
            <div className={TableStyles.TitleCallToAction}>
                <h5 className={TableStyles.Title}>
                    All passwords
                    <span className={TagStyles.NumberOfRowSpan}>{res.data?.length}</span>
                </h5>
                <CredentialsAddBtn addIcon />
            </div>
            {res.data && <CredentialsTable entitys={res.data} />}
        </section>
    </>
}

export default Dashboard;