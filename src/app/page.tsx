import { auth } from "@/auth"
import { AuthButton } from "@/components/AuthButton.client"
import { redirect } from "next/navigation"

// Landing page, introduction for first time visitors
export default async function Landing() {
	// Calls the auth function to get the current user's session.
	const session = await auth()

	// Checks if user is authenticated, if true redirect to dashboard
	if (session?.user) {
		redirect(`/dashboard`)
	}

	return <>
		<main>
			Landing page
			<AuthButton />
		</main>
	</>
}