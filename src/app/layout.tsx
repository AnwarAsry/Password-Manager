import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google"

export const metadata: Metadata = {
	title: "Password manager",
	description: "A Password Management Website that securely stores and manages login credentials, featuring Google authentication, encrypted storage, and a user-friendly dashboard for adding, searching, and editing accounts.",
};

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// SessionProvider necessary for useSession hook in client components 
		<SessionProvider>
			<html lang="en" className={roboto.className}>
				<body>
					{children}
				</body>
			</html>
		</SessionProvider>
	);
}
