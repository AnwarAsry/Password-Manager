import NextAuth from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google"

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
        session: async ({ session, user }) => {
            // Set the User to the session
            // session.user.id = user.id;
            // session.user.image = user.image
            // session.user.name = user.name
            session.user.email = "hfej"

            // Returns the modified session object to be used on the client side.
            return session; 
        },
    },
})