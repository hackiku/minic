// src/components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black dark:bg-neutral-950 py-12 md:py-16 text-white">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
					<div>
						<h3 className="text-2xl font-serif tracking-tight mb-6">EVA</h3>
						<p className="text-neutral-400 mb-4 max-w-xs">
							Luxury handmade lingerie crafted in Europe,
							delivered monthly to your doorstep.
						</p>
						<div className="flex space-x-4 text-neutral-500">
							<a href="https://instagram.com/eva_goddesslingerie" className="hover:text-pink-300 transition-colors">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.073-4.948-.197-4.354-2.617-6.78-6.979-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a href="#" className="hover:text-pink-300 transition-colors">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h21.351c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325zm-3.794 7.355c.012.146.012.293.012.44 0 4.501-3.426 9.693-9.693 9.693-1.935 0-3.731-.566-5.242-1.545.273.033.537.045.821.045 1.598 0 3.072-.547 4.249-1.481-1.501-.027-2.762-1.021-3.194-2.381.209.032.419.051.638.051.3 0 .599-.039.879-.117-1.564-.317-2.745-1.694-2.745-3.35v-.042c.456.254.986.408 1.545.427-.919-.613-1.521-1.661-1.521-2.847 0-.63.169-1.212.462-1.719 1.675 2.062 4.188 3.407 7.004 3.552-.058-.254-.088-.519-.088-.784 0-1.887 1.527-3.425 3.425-3.425.984 0 1.875.415 2.5 1.085.775-.149 1.52-.435 2.179-.83-.254.799-.798 1.47-1.511 1.894.695-.082 1.357-.267 1.971-.539-.459.682-1.044 1.284-1.711 1.772z" />
								</svg>
							</a>
							<a href="#" className="hover:text-pink-300 transition-colors">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-sm font-mono uppercase mb-4 text-neutral-300">Navigation</h4>
						<nav className="flex flex-col space-y-2 text-neutral-400">
							<a href="/" className="hover:text-pink-300 transition-colors">Home</a>
							<a href="/shop" className="hover:text-pink-300 transition-colors">Shop</a>
							<a href="/boxes" className="hover:text-pink-300 transition-colors">Monthly Boxes</a>
							<a href="/about" className="hover:text-pink-300 transition-colors">Our Story</a>
							<a href="/contact" className="hover:text-pink-300 transition-colors">Contact</a>
						</nav>
					</div>

					<div>
						<h4 className="text-sm font-mono uppercase mb-4 text-neutral-300">Newsletter</h4>
						<p className="text-neutral-400 mb-4">
							Subscribe for updates, exclusive offers and more.
						</p>
						<div className="flex">
							<input
								type="email"
								placeholder="your@email.com"
								className="flex-1 bg-neutral-900 dark:bg-neutral-800 border border-neutral-800 dark:border-neutral-700 px-3 py-2 
                         focus:border-pink-300 focus:outline-none"
							/>
							<button className="bg-pink-300 text-black px-4 py-2 font-mono uppercase text-sm">
								Join
							</button>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-neutral-900 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
					<p>© {currentYear} EVA. All rights reserved.</p>

					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="/privacy" className="hover:text-pink-300 transition-colors">Privacy Policy</a>
						<a href="/terms" className="hover:text-pink-300 transition-colors">Terms of Service</a>
						<a href="/shipping" className="hover:text-pink-300 transition-colors">Shipping</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;