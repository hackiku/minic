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
		<main className="min-h-screen bg-background">
			{/* Hero Section - Full width with internal constraints */}
			<section className="w-full">
				<Hero />
			</section>

			{/* Product Categories - Premium balanced spacing */}
			<section className="py-20 md:py-28 bg-accent/40">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<header className="mb-16 text-center">
						<h2 className="text-3xl md:text-4xl font-light mb-4">Handcrafted Collections</h2>
						<p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
							Each piece is meticulously crafted from the finest materials, designed to make you feel like the goddess you are.
						</p>
					</header>
					<ShopGrid />
				</div>
			</section>

			{/* Instagram Feed Section - Fashion forward spacing */}
			<section className="py-16 md:py-24 bg-white dark:bg-black">
				<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<header className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-light mb-4">Follow Our Journey</h2>
						<p className="text-neutral-500 dark:text-neutral-400 text-center max-w-2xl mx-auto">
							Join our community of goddesses and be the first to see our latest creations.
						</p>
					</header>
					<InstagramFeed />
				</div>
			</section>

			{/* Featured Collection - Ultra luxury spacing */}
			<section className="py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900">
				<div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
					<header className="flex flex-col md:flex-row justify-between items-center mb-16">
						<h2 className="text-2xl md:text-3xl font-light mb-4 md:mb-0">Monthly Subscription Box</h2>
						<a href="/shop" className="text-sm uppercase text-pink-400 hover:text-pink-500 transition-colors font-mono tracking-wider">
							View All Collections
						</a>
					</header>

					<div className="prose prose-lg dark:prose-invert mx-auto">
						<p>
							Every month, receive a carefully curated selection of luxury lingerie pieces,
							delivered discreetly to your doorstep. Each box is thoughtfully designed to
							surprise and delight, with exclusive pieces not available for individual purchase.
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section - Fashion forward spacing */}
			<section className="py-16 md:py-20 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-black">
				<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8">Ready to indulge?</h2>
					<a href="/shop" className="inline-block px-8 py-4 border border-pink-400 text-pink-400 hover:bg-pink-400/10 transition-colors uppercase tracking-wider font-mono">
						Reserve Your Subscription
					</a>
					<p className="mt-6 text-sm text-neutral-500 max-w-md mx-auto">
						Limited spots available. €30 reservation fee applies to your first box.
					</p>
				</div>
			</section>
		</main>
	);
}