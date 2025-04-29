import "./globals.css";
import HeaderStyles from '@styles/Header.module.scss'
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const openSans = Open_Sans({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "PassMan",
	description: "Welcome to PassMan! This is a simple password manager that allows you to securely store and manage your passwords. You can add, edit, and delete passwords, as well as generate strong passwords for your accounts. The passwords are stored securely using encryption, so you can be sure that your data is safe.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={openSans.className}>
			<body>
				<header className={HeaderStyles.Header}>
					<a href="/">
						<p className={HeaderStyles.LogoName}><span>Pass</span>Man</p>
					</a>
				</header>
				<SessionProvider>
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
