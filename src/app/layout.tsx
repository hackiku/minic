// src/app/layout.tsx
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "Create T3 App",
	description: "Generated by create-t3-app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export function Nav() {

	return (
		<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#FF7CC3]" >
			<div className="container mx-auto px-4 py-6 flex justify-between items-center">
				<a href="/" className="text-2xl font-serif tracking-tight">EVA</a>

				<div className="flex items-center space-x-8">
					<a href="/shop" className="font-mono uppercase text-sm hover:text-pink-300">Shop</a>
					<a href="/boxes" className="font-mono uppercase text-sm hover:text-pink-300">Boxes</a>
					<a href="/about" className="font-mono uppercase text-sm hover:text-pink-300">Story</a>
					<button className="font-mono uppercase text-sm border-b border-pink-500 pb-1 hover:text-pink-300">
						Cart (0)
					</button>
				</div>
			</div>
		</nav >
	);
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<Nav />
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
