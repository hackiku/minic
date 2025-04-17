// src/app/page.tsx
import EmailForm from "./_components/cta/EmailForm";
import ShopGrid from "./_components/shop/ShopGrid";
import WireframeSphere from "./_components/3d/WireframeSphere";

export default function Home() {
	return (
		<main className="min-h-screen bg-neutral-950 text-white">
			{/* Hero Section */}
			<section className="relative w-full flex flex-col items-center">
				{/* Header content */}
				<div className="container mx-auto px-6 pt-28 md:pt-40 relative z-10">
					<div className="max-w-3xl">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-neutral-600 leading-tight">
							Who will you give the apple to?
						</h1>

						<div className="mt-8 md:mt-12 max-w-md">
							<EmailForm />
						</div>
					</div>
				</div>

				{/* Decorative sphere */}
				<div className="absolute right-0 md:right-[10%] top-[20%] md:top-[25%] z-0 opacity-70">
					<WireframeSphere size={300} className="md:w-[400px] lg:w-[500px]" />
				</div>
			</section>

			{/* Shop Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-6">

					<ShopGrid />
				</div>
			</section>

			{/* Shop Section */}
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