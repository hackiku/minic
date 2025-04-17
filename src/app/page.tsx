import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { HydrateClient, api } from "~/trpc/server";

// src/app/page.tsx
export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white">
			<div className="container mx-auto px-4">
				{/* Hero with glitchy 3D */}
				<section className="h-screen flex items-center justify-center relative">
					<div className="absolute inset-0 opacity-30">
						{/* <GlitchModel /> */}
					</div>

					<div className="z-10 text-center">
						<h1 className="text-5xl md:text-8xl font-serif tracking-tight">
							EVA
						</h1>
						<p className="text-xl md:text-2xl font-sans uppercase tracking-widest mt-4">
							Lingerie that feels like a second skin
						</p>
						<button className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-none font-mono uppercase tracking-wider">
							Shop Now
						</button>
					</div>
				</section>

				{/* Quick manifesto */}
				<section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
					<div>
						<h2 className="text-3xl font-mono uppercase mb-6">Why Pay For A Therapist When You Can Buy Lingerie</h2>
						<p className="text-gray-300 font-serif leading-relaxed">
							Hand-stitched in Europe, delivered to your door with notes that'll make you feel seen. This isn't just lace - it's self-care with an edge.
						</p>
					</div>
					<div className="bg-gradient-to-b from-pink-500/20 to-transparent p-12">
						<img src="/images/lace-detail.jpg" alt="Lace detail" className="mix-blend-screen" />
					</div>
				</section>
			</div>
		</main>
	);
}