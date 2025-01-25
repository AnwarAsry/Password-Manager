import LayoutStyles from "@/styles/Layout.module.scss"
import LandingStyles from "@/styles/LandingPage.module.scss"
import { AuthButton } from "@/components/AuthButton.client"
import { redirect } from "next/navigation"
import { validateSession } from "@/utils/ValidateSession"

// Landing page, introduction for first time visitors
export default async function Landing() {
	// Calls the auth function to get the current user's session.
	const session = await validateSession()

	// Checks if user is authenticated, if true redirect to dashboard
	if (session.user) {
		redirect(`/dashboard`)
	}

	return <>
		<main className={LayoutStyles.LandingPageLayout}>
			<h1 className={LandingStyles.IntroductionHeading}>Password Manager</h1>
			<div className={LandingStyles.Content}>
				<AuthButton />
			</div>
		</main>
	</>
}