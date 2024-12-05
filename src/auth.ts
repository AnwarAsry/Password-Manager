import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google"
import client from "@/lib/db";
import { Provider } from "next-auth/providers";

// Any future providers or custom credentials add to this list
const providers: Provider[] = [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        // Maps the user data
        profile: async (profile: GoogleProfile) => {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                password: "",
            };
        },
    }),
]

// For client usem, list of only providers (e.g Github, Google, Facebook)
export const providerMap = providers.map(provider => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
}).filter((provider) => provider.id !== "credentials")


// Exporting handlers, signIn, signOut, and auth from NextAuth for authentication functionality
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
    callbacks: {
        // A callback to manipulate or customize the session object.
        // The user in the destructuring is only avalable if AuthConfig.session is set to strategy: "database"
        session: async ({ session, user }) => {
            // Set only the User properties we need to the session
            session.user.id = user.id;
            session.user.name = user.name
            session.user.image = user.image
            session.user.email = user?.email

            // Returns the modified session object to be accessed on the client side
            return session; 
        },
    },
    adapter: MongoDBAdapter(client),
    session: {
        strategy: "database",
    },
    // This is for using my custom login page and not authjs provider page
    pages: {
        signIn: "/login",
    },
})