// src/app/_components/instagram/InstagramFeed.tsx
"use client"

import React from 'react';

// Mock Instagram data based on the screenshots you provided
const mockInstagramPosts = [
	{
		id: '1',
		imageUrl: '/api/placeholder/300/300',
		caption: 'Pack this order with me 😊',
		type: 'image'
	},
	{
		id: '2',
		imageUrl: '/api/placeholder/300/300',
		caption: 'They told us that Eve was responsible for the downfall of mankind',
		type: 'image'
	},
	{
		id: '3',
		imageUrl: '/api/placeholder/300/300',
		caption: 'Do you want to charm them... Or haunt them a little?',
		type: 'image'
	},
	{
		id: '4',
		imageUrl: '/api/placeholder/300/300',
		caption: 'i choose peace',
		type: 'image'
	},
	{
		id: '5',
		imageUrl: '/api/placeholder/300/300',
		caption: 'New lingerie set now available ✨',
		type: 'image'
	},
	{
		id: '6',
		imageUrl: '/api/placeholder/300/300',
		caption: 'Workshop sneak peek',
		type: 'image'
	}
];

const InstagramFeed = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-6">
				<header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
					<div>
						<h2 className="text-3xl md:text-4xl font-light mb-3">Follow Our Journey</h2>
						<p className="text-neutral-400">@eva_goddesslingerie</p>
					</div>
					<a
						href="https://instagram.com/eva_goddesslingerie"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-300 hover:text-pink-400 transition-colors font-mono uppercase text-sm tracking-wider"
					>
						View Instagram
					</a>
				</header>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{mockInstagramPosts.map((post) => (
						<div
							key={post.id}
							className="aspect-square relative group overflow-hidden bg-neutral-900"
						>
							<img
								src={post.imageUrl}
								alt={post.caption}
								className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-105"
							/>

							<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                             transition-opacity flex items-center justify-center p-4">
								<p className="text-center text-sm md:text-base">
									{post.caption}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default InstagramFeed;