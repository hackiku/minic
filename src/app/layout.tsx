// src/app/layout.tsx
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "~/components/layout/Nav";
import Footer from "~/components/layout/Footer";

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
		<html lang="en" className={`${geist.variable}`}>
			<body className="bg-neutral-950 text-white">
				<Nav />
				<TRPCReactProvider>{children}</TRPCReactProvider>
				<Footer />
			</body>
		</html>
	);
}