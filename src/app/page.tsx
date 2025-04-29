import LayoutStyles from '@styles/Layout.module.scss'
import { AuthLogin } from '@components/Auth/AuthLogin';
import { redirect } from 'next/navigation';
import { auth } from '@auth';

export default async function Home() {
	const session = await auth();

	if (session && session.user) {
		redirect("/dashboard");
	}

	return (
		<main className={LayoutStyles.LandingPageLayout}>
			<h1>Password Manager</h1>
			<p>
				Welcome to the Password Manager! <br /> This is a simple password manager that allows you to securely store and manage your passwords.
				You can add, edit, and delete passwords, as well as generate strong passwords for your accounts. The passwords are stored securely using encryption, so you can be sure that your data is safe.
			</p>

			<p>Coming soon...</p>

			<AuthLogin />
		</main>
	);
}