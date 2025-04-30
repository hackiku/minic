// src/app/page.tsx
import EmailForm from "./_components/cta/EmailForm";
import ShopGrid from "./_components/shop/ShopGrid";
import InstagramFeed from "./_components/instagram/InstagramFeed";
import Hero from "~/app/_components/content/Hero";
import dynamic from 'next/dynamic';

// Dynamically import the Apple component 
const Apple = dynamic(() => import('./_components/3d').then(mod => mod.Apple), {
	loading: () => (
		<div className="w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] opacity-70">
			{/* Simple loading placeholder */}
		</div>
	)
});

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Instagram Feed Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-6">
					<header className="mb-12">
						<h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Follow Our Journey</h2>
						<p className="text-neutral-500 dark:text-neutral-400 text-center max-w-2xl mx-auto">
							Join our community of goddesses and be the first to see our latest creations.
						</p>
					</header>
					<InstagramFeed />
				</div>
			</section>

			{/* Shop Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-6">
					<ShopGrid />
				</div>
			</section>

			{/* Featured Collection Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-6">
					<header className="flex justify-between items-center mb-12">
						<h2 className="text-xl md:text-2xl font-light">Girliest girly lingerie monthly</h2>
						<a href="/shop" className="text-sm uppercase text-[#FF7CC3] hover:underline">View All</a>
					</header>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-8 md:py-16">
				<div className="container mx-auto px-6 text-right">
					<a href="/shop" className="inline-block px-6 py-3 border border-[#FF7CC3] text-[#FF7CC3] hover:bg-[#FF7CC3]/10 transition-colors uppercase tracking-wider">
						Shop Now
					</a>
				</div>
			</section>
		</main>
	);
}