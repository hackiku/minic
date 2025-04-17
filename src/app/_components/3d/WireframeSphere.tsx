// src/app/_components/3d/WireframeSphere.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface WireframeSphereProps {
	size?: number;
	color?: string;
	className?: string;
}

export function WireframeSphere({
	size = 400,
	color = "#FF7CC3",
	className = ""
}: WireframeSphereProps) {
	const svgRef = useRef<SVGSVGElement>(null);

	// Use responsive class approach rather than fixed sizes
	const containerClasses = `${className} relative`;

	useEffect(() => {
		// Simple animation
		let angle = 0;
		let requestId: number;

		const animate = () => {
			if (!svgRef.current) return;

			angle += 0.005;

			// Update rotation of ellipses to create movement
			const ellipses = svgRef.current.querySelectorAll('ellipse');
			ellipses.forEach((ellipse, i) => {
				const baseAngle = (i * 15) + angle * (30 + i * 5);
				ellipse.setAttribute('transform', `rotate(${baseAngle} 50 50)`);
			});

			requestId = requestAnimationFrame(animate);
		};

		animate();
		return () => cancelAnimationFrame(requestId);
	}, []);

	return (
		<div className={containerClasses} style={{ width: `${size}px`, height: `${size}px` }}>
			<svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full">
				{/* Horizontal circles */}
				<circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" />
				<circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
				<circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
				<circle cx="50" cy="50" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />

				{/* Vertical ellipses to create 3D effect */}
				<ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
				<ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
				<ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
				<ellipse cx="50" cy="50" rx="15" ry="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />

				{/* Perpendicular ellipses */}
				<ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
				<ellipse cx="50" cy="50" rx="12" ry="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
				<ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
				<ellipse cx="50" cy="50" rx="5" ry="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />
			</svg>
		</div>
	);
}

export default WireframeSphere;