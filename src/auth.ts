import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google"
import client from "@/lib/db";
// import { getUser } from "@/lib/authorize";

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
                    password: "",
                };
            },
        })
    ],
    // callbacks: {
    //     // A callback to manipulate or customize the session object.
    //     // The user in the destructuring is only avalable if AuthConfig.session is set to strategy: "database"
    //     session: async ({ session, user }) => {
    //         const userFound = await getUser(user.id)
            
    //         console.log("huh:", user);
    //         console.log("WHat:", userFound);
            
            
    //         // Set the User to the session
    //         // session.user.id = userFound?.;
    //         // session.user.image = userFound.image as string
    //         // session.user.name = userFound.name as string


    //         // Returns the modified session object to be used on the client side.
    //         return session; 
    //     },
    // },
    adapter: MongoDBAdapter(client),
    // session: {
    //     strategy: "database",
    // },
})