import LayoutStyles from '@styles/Layout.module.scss'
import HeaderStyles from '@styles/Header.module.scss'
import { redirect } from 'next/navigation';
import { auth } from '@lib/auth';

export default async function Home() {
	const session = await auth();

	if (session && session.user) {
		redirect("/dashboard");
	}

	return (
		<section className={LayoutStyles.LandingPageLayout}>
			<h1 className={HeaderStyles.LogoName}><span>Pass</span>Man</h1>
			<p>
				Welcome to the PassMan! <br /> This is a simple password manager that allows you to securely store and manage your passwords.
				You can add, edit, and delete passwords, as well as generate strong passwords for your accounts. The passwords are stored securely using encryption, so you can be sure that your data is safe.
			</p>
		</section>
	);
}