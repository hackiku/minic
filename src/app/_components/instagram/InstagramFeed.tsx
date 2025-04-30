// src/app/_components/instagram/InstagramFeed.tsx
import React from 'react';
import Link from 'next/link';

// Mock Instagram data based on the screenshots provided
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
		<div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{mockInstagramPosts.map((post) => (
					<div
						key={post.id}
						className="aspect-square relative group overflow-hidden bg-neutral-100 dark:bg-neutral-900"
					>
						<img
							src={post.imageUrl}
							alt={post.caption}
							className="w-full h-full object-cover transition-transform duration-500 
                         group-hover:scale-105"
						/>

						<div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 
                           transition-opacity flex items-center justify-center p-4">
							<p className="text-center text-sm md:text-base text-white">
								{post.caption}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 text-center">
				<Link
					href="https://instagram.com/eva_goddesslingerie"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block border border-pink-300 text-pink-300 px-6 py-2 font-mono uppercase 
                   hover:bg-pink-300/10 transition-colors text-sm tracking-wider"
				>
					Follow on Instagram
				</Link>
			</div>
		</div>
	);
};

export default InstagramFeed;