// src/app/_components/layout/Nav.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#FF7CC3]">
			<div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-serif tracking-tight z-20">EVA</Link>

				{/* Mobile menu button */}
				<button
					className="md:hidden z-20"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? "Close menu" : "Open menu"}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						{menuOpen ? (
							<path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						) : (
							<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						)}
					</svg>
				</button>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					<Link href="/shop" className="font-mono uppercase text-sm hover:text-pink-300">Shop</Link>
					<Link href="/boxes" className="font-mono uppercase text-sm hover:text-pink-300">Boxes</Link>
					<Link href="/about" className="font-mono uppercase text-sm hover:text-pink-300">Story</Link>
					<button className="font-mono uppercase text-sm border-b border-pink-500 pb-1 hover:text-pink-300">
						Cart (0)
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				{menuOpen && (
					<div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-10">
						<div className="flex flex-col items-center space-y-8">
							<Link
								href="/shop"
								className="font-mono uppercase text-lg hover:text-pink-300"
								onClick={() => setMenuOpen(false)}
							>
								Shop
							</Link>
							<Link
								href="/boxes"
								className="font-mono uppercase text-lg hover:text-pink-300"
								onClick={() => setMenuOpen(false)}
							>
								Boxes
							</Link>
							<Link
								href="/about"
								className="font-mono uppercase text-lg hover:text-pink-300"
								onClick={() => setMenuOpen(false)}
							>
								Story
							</Link>
							<button className="font-mono uppercase text-lg border-b border-pink-500 pb-1 hover:text-pink-300">
								Cart (0)
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Nav;