import LandingStyles from "@/styles/LandingPage.module.scss"
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
		<main className={LandingStyles.layout}>
			<h1 className={LandingStyles.IntroductionHeading}>Password Manager</h1>
			<div className={LandingStyles.Content}>
				<AuthButton />
			</div>
		</main>
	</>
}