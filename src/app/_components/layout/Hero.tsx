// src/app/_components/layout/Hero.tsx
import React from 'react';
import ShopNow from '../cta/ShopNow';
import EmailForm from '../cta/EmailForm';

export function Hero() {
	return (
		<div className="h-screen flex flex-col md:flex-row">
			{/* Left content - headline, subhead, CTA */}
			<div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12">
				<h1 className="text-6xl md:text-8xl font-serif mb-6 text-[#FF7CC3]">
					EVA
				</h1>
				<p className="text-xl md:text-3xl font-light mb-8 max-w-lg">
					Who's the apple for? Handcrafted lingerie that makes you feel everything
				</p>

				<div className="space-y-4 mt-4">
					<EmailForm />
					<div className="mt-4">
						<ShopNow />
					</div>
				</div>
			</div>

			{/* Right content - wireframe sphere */}
			<div className="flex-1 flex items-center justify-center relative">
				{/* This will be replaced with 3D later, for now using SVG */}
				<div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
					{/* Simple wireframe sphere placeholder using SVG */}
					<svg viewBox="0 0 100 100" className="w-full h-full">
						{/* Horizontal circles */}
						<circle cx="50" cy="50" r="45" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.3" />
						<circle cx="50" cy="50" r="35" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.5" />
						<circle cx="50" cy="50" r="25" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.7" />
						<circle cx="50" cy="50" r="15" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.9" />

						{/* Vertical ellipses to create 3D effect */}
						<ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.3" />
						<ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.5" />
						<ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.7" />
						<ellipse cx="50" cy="50" rx="15" ry="5" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.9" />

						{/* Perpendicular ellipses */}
						<ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.3" transform="rotate(45 50 50)" />
						<ellipse cx="50" cy="50" rx="12" ry="35" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.5" transform="rotate(45 50 50)" />
						<ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.7" transform="rotate(45 50 50)" />
						<ellipse cx="50" cy="50" rx="5" ry="15" fill="none" stroke="#FF7CC3" strokeWidth="0.5" opacity="0.9" transform="rotate(45 50 50)" />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Hero;