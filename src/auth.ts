import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google"
import client from "@/lib/db";

// Exporting handlers, signIn, signOut, and auth from NextAuth for authentication functionality.
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
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
                };
            },
        })
    ],
    callbacks: {
        // A callback to manipulate or customize the session object.
        // The user in the destructuring is only avalable if AuthConfig.session is set to strategy: "database"
        session: async ({ session, user }) => {
            // Set the User to the session
            session.user.id = user.id;
            session.user.image = user.image as string
            session.user.name = user.name as string

            // Returns the modified session object to be used on the client side.
            return session; 
        },
    },
    adapter: MongoDBAdapter(client),
    session: {
        strategy: "database",
    },
})