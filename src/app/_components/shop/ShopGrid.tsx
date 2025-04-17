// src/app/_components/shop/ShopGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';

// Mock data - replace with actual data later
const mockProducts = [
	{ id: '1', name: 'Silk Lace Bralette', price: 89, imageUrl: '' },
	{ id: '2', name: 'High-Waist Briefs', price: 59, imageUrl: '' },
	{ id: '3', name: 'Corset with Embroidery', price: 129, imageUrl: '' },
	{ id: '4', name: 'Silk Robe', price: 149, imageUrl: '' },
	{ id: '5', name: 'Lace Trim Slip', price: 99, imageUrl: '' },
	{ id: '6', name: 'Embroidered Garter Set', price: 79, imageUrl: '' },
];

export function ProductGallery() {
	return (
		<div className="py-16 px-6 md:px-12">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-2xl font-serif">Featured Pieces</h2>
				<a href="/shop" className="text-sm uppercase text-[#FF7CC3] hover:underline">View All</a>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{mockProducts.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductGallery;