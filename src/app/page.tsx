// src/app/page.tsx
import Hero from "./_components/layout/Hero";
import ShopGrid from "./_components/shop/ShopGrid";
import ShopNow from "./_components/cta/ShopNow";3

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-950 text-white">
			<Hero />
			
			<ShopGrid />

			<div className="absolute bottom-4 right-4">
				<ShopNow />
			</div>
			{/* You can add more sections here later */}
		</main>
	);
}
