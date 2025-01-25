import LayoutStyles from "@/styles/Layout.module.scss"
import LandingStyles from "@/styles/LandingPage.module.scss"

import { AuthButton } from "@/components/AuthButton.client"

// Landing page, introduction for first time visitors
export default async function Landing() {

	return <>
		<main className={LayoutStyles.LandingPageLayout}>
			<h1 className={LandingStyles.IntroductionHeading}>Password Manager</h1>
			<div className={LandingStyles.Content}>
				<AuthButton />
			</div>
		</main>
	</>
}