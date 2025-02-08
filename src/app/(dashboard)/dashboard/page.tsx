import TableStyles from "@/styles/CredentialsTable.module.scss";
import TagStyles from "@/styles/Tag.module.scss";
import HeaderStyles from "@/styles/Header.module.scss";

import { getAllCredentialsForUser } from "@/actions/account";
import { validateSession } from "@/utils/ValidateSession";

import { SearchBar } from "@/components/Search/SearchBar";
import { CredentialsTable } from "@/components/Table/CredentialsTable";
import { CredentialsAddBtn } from "@/components/CredentialsAddBtn";
import { TableRow } from "@/components/Table/TableRow";


const Dashboard = async () => {
    const session = await validateSession();

    const res = await getAllCredentialsForUser(session.user.id)

    return <>
        <header className={HeaderStyles.HeaderInMain}>
            <SearchBar />
        </header>
        <section>
            <div className={TableStyles.TitleCallToAction}>
                <h5 className={TableStyles.Title}>
                    Passwords
                    <span className={TagStyles.NumberOfRowSpan}>{res.data?.length}</span>
                </h5>
                <CredentialsAddBtn addIcon text="New Item" />
            </div>

            <CredentialsTable>
                {res.data?.map(item => <TableRow key={item.id} entity={item} />)}
            </CredentialsTable>
        </section>
    </>
}

export default Dashboard;