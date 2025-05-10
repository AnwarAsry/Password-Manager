import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Header from "@components/Header";
import { auth } from "@lib/auth";
import WrapperStyles from "@styles/Wrappers.module.scss";

const openSans = Open_Sans({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "PassMan lets you securely store and manage passwords",
	description: "Welcome to PassMan! A simple, secure password manager. Store, edit, delete, and generate strong passwords, all safely encrypted for your peace of mind",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<html lang="en" className={openSans.className}>
			<body>
				<SessionProvider session={session}>
					<Header />
					<main className={WrapperStyles.MainWrapper}>
						{children}
					</main>
				</SessionProvider>
			</body>
		</html>
	);
}
