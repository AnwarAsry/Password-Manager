import LayoutStyles from "@/styles/Layout.module.scss"
import LandingStyles from "@/styles/LandingPage.module.scss"

import { AuthButton } from "@/components/Login/AuthButton.client"
import { auth } from "@/auth"

import { redirect } from "next/navigation";

// Landing page, introduction for first time visitors
export default async function Landing() {

	const session = await auth();

	if (session && session.user) {
		redirect("/dashboard");
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