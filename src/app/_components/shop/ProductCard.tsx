// src/app/_components/shop/ProductCard.tsx
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
}

export function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
	return (
		<Link href={`/shop/${id}`} className="group block">
			<div className="border border-neutral-800 hover:border-[#FF7CC3]/50 transition-colors p-4 pb-6 h-full">
				<div className="relative aspect-square mb-4 overflow-hidden bg-neutral-900">
					{/* Product image placeholder */}
					<div
						className="w-full h-full flex items-center justify-center"
						style={imageUrl ? {
							backgroundImage: `url(${imageUrl})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						} : {}}
					>
						{!imageUrl && (
							<span className="text-sm text-neutral-600">Image placeholder</span>
						)}
					</div>

					{/* Quick add overlay */}
					<div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
						<button className="bg-[#FF7CC3] px-4 py-2 text-black text-sm uppercase">
							Quick View
						</button>
					</div>
				</div>

				<h3 className="text-base md:text-lg font-light mb-1 line-clamp-2">{name}</h3>
				<p className="text-[#FF7CC3]">${price.toFixed(2)}</p>
			</div>
		</Link>
	);
}

export default ProductCard;