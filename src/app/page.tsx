import { auth } from "@/auth"
import { Button } from "@/components/Button"
import { redirect } from "next/navigation"

export default async function Landing() {
	// Calls the auth function to get the current user's session.
	const session = await auth()

	// Checks if user is authenticated, if true redirect to dashboard
	if (session?.user) {
		redirect(`/dashboard/${session.user.id}`)
	}

	return <>
		<header></header>
		<main>
			Landing page
			<Button />
		</main>
	</>
}