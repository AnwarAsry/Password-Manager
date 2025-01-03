import { AdapterUser } from "next-auth/adapters";
import { User } from "@/models/User";

declare module "next-auth" {
	// Modifying the user object within session for custom properties
	interface Session {
        user: User & AdapterUser,
    }
}
