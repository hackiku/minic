// src/app/_components/content/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Apple component to prevent SSR issues
const Apple = dynamic(() => import('~/app/_components/3d').then(mod => mod.Apple), {
	ssr: false,
	loading: () => (
		<div className="w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] opacity-70">
			{/* Loading placeholder */}
		</div>
	)
});

const Hero = () => {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [sphereSize, setSphereSize] = useState(400);

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Email submitted:', email);
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
		setEmail('');
	};

	// Responsive sizing for the 3D element
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setSphereSize(250);
			} else if (window.innerWidth < 1024) {
				setSphereSize(350);
			} else {
				setSphereSize(450);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className="relative h-[65vh] flex items-center pt-20">
			
			<div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-12 mb-8">
						Who will you give
						<span className="text-primary block mt-2">
							the apple to?
						</span>
					</h1>

					<p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg">
						Luxury handmade lingerie. Feminine energy delivered monthly to your doorstep.
					</p>

					<div className="max-w-md relative">
						<div className="flex flex-col sm:flex-row gap-3">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="your@email.com"
								className="flex-1 bg-transparent border border-pink-300/30 focus:border-pink-300 px-4 py-3 
                           focus:outline-none transition-colors dark:text-white"
							/>
							<button
								onClick={handleSubmit}
								className="bg-pink-300 text-black px-6 py-3 font-mono uppercase 
                           hover:bg-pink-400 transition-colors whitespace-nowrap"
							>
								Reserve Now
							</button>
						</div>

						{submitted && (
							<div className="absolute -bottom-10 left-0 right-0 bg-pink-300/10 text-pink-300 py-2 text-center">
								Thank you! We'll be in touch soon.
							</div>
						)}

						{/* <p className="mt-4 text-sm text-neutral-500">
							Limited spots available. €30 reservation fee applies to your first box.
						</p> */}
					</div>
				</div>

				{/* 3D Apple Component */}
				<div className="relative flex justify-center">
					<Apple
						size={sphereSize}
						color="#FF7CC3"
						opacity={0.7}
						segments={24}
						rotationSpeed={0.2}
						className="opacity-70"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;