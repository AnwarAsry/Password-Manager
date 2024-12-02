import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
	// Adding user properties
	interface Session {
        user: AdapterUser & {
            name: string
            password: string
            googleID: string
            image: string
        }
    }
}
