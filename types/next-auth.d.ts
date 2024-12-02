import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
	// Adding user properties
	interface Session {
        user: AdapterUser & {
            name: "",
            password: "",
            googleID: "",
            image: "",
        }
    }
}
