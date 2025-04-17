// src/app/_components/cta/EmailForm.tsx
import React from 'react';

export function EmailForm() {
	return (
		<div className="max-w-md">
			{/* <h3 className="text-sm uppercase tracking-wider mb-2 font-mono">Subscribe for monthly drops</h3> */}
			<div className="flex">
				<input
					type="email"
					placeholder="your@email.com"
					className="flex-1 bg-transparent border border-[#FF7CC3]/50 px-4 py-2 focus:border-[#FF7CC3] focus:outline-none"
				/>
				<button
					type="submit"
					className="bg-[#FF7CC3] px-4 py-2 font-mono uppercase text-black hover:bg-[#FF7CC3]/80 transition-colors"
				>
					Pre-Order
				</button>
			</div>
			{/* <p className="mt-2 text-xs text-neutral-400">
				Get 10% off your first order when you subscribe
			</p> */}
		</div>
	);
}

export default EmailForm;