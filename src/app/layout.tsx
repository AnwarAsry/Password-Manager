import type { Metadata } from "next";
import "./globals.css";

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
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
