import TableStyles from "@/styles/CredentialsTable.module.scss"


export const CredentialsTable = ({
    children
}: {
    children: React.ReactNode
}) => {
    return <>
        <section className={TableStyles.Table}>
            <div className={TableStyles.TableHead}>
                <p>Platform</p>
                <p>Username</p>
                <p>Password</p>
            </div>
            {children}
        </section>
    </>
};