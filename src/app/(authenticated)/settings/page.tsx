import { SessionValidate } from "@lib/SessionValidate"

const Settings = async () => {
    await SessionValidate();

    return (
        <section>
            <h2>Settings Page Coming soon...</h2>
        </section>
    )
}

export default Settings;