// src/app/layout.tsx
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "~/components/layout/Nav";
import Footer from "~/components/layout/Footer";
import { ThemeProvider } from "~/components/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "EVA | Luxury Handmade Lingerie",
	description: "Luxury handmade lingerie. Crafted in Europe, shipped worldwide.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
			<body className="" suppressHydrationWarning>
				<TRPCReactProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Nav />
						{children}
						<Footer />
					</ThemeProvider>
				</TRPCReactProvider>
			</body>
		</html>
	);
}