// src/app/_components/cta/ShopNow.tsx
import React from 'react';
import Link from 'next/link';

export function ShopNow() {
	return (
		<Link
			href="/shop"
			className="inline-block px-8 py-3 border border-[#FF7CC3] text-[#FF7CC3] hover:bg-[#FF7CC3]/10 font-mono uppercase tracking-wider transition-all"
		>
			Shop Now
		</Link>
	);
}

export default ShopNow;