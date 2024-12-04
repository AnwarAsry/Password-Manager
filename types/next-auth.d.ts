import { AdapterUser } from "next-auth/adapters";
import { User } from "@/models/User";

declare module "next-auth" {
	// Adding user properties
	interface Session {
        user: User & AdapterUser,
    }
}
