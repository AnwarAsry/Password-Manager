import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
	title: "Password manager",
	description: "A Password Management Website that securely stores and manages login credentials, featuring Google authentication, encrypted storage, and a user-friendly dashboard for adding, searching, and editing accounts.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SessionProvider>
			<html lang="en">
				<body>
					{children}
				</body>
			</html>
		</SessionProvider>
	);
}
