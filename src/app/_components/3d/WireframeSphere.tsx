// src/app/_components/3d/WireframeSphere.tsx
import React from 'react';

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
	const style = {
		width: `${size}px`,
		height: `${size}px`
	};

	return (
		<div className={className} style={style}>
			<svg viewBox="0 0 100 100" className="w-full h-full">
				{/* Horizontal circles */}
				<circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
				<circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
				<circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
				<circle cx="50" cy="50" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.9" />

				{/* Vertical ellipses to create 3D effect */}
				<ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
				<ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
				<ellipse cx="50" cy="50" rx="25" ry="8" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
				<ellipse cx="50" cy="50" rx="15" ry="5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.9" />

				{/* Perpendicular ellipses */}
				<ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" transform="rotate(45 50 50)" />
				<ellipse cx="50" cy="50" rx="12" ry="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" transform="rotate(45 50 50)" />
				<ellipse cx="50" cy="50" rx="8" ry="25" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" transform="rotate(45 50 50)" />
				<ellipse cx="50" cy="50" rx="5" ry="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.9" transform="rotate(45 50 50)" />
			</svg>
		</div>
	);
}

export default WireframeSphere;