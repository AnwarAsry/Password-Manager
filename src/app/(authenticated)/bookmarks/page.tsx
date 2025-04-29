import { SessionValidate } from "@lib/SessionValidate"

const Bookmarks = async () => {
    await SessionValidate();

    return (
        <section>
            <h2>Bookmarks Page Coming soon...</h2>
        </section>
    )
}

export default Bookmarks;