// src/app/_components/3d/index.ts

'use client';

// Simple exports
export { default as Scene } from './Scene';
export { default as AppleModel } from './world/AppleModel';
export { default as Camera } from './world/Camera';
export { default as Glitter } from './world/Glitter';
export * from './data/colors';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports
const DynamicScene = dynamic(() => import('./Scene'), { ssr: false });
const DynamicAppleModel = dynamic(() => import('./world/AppleModel'), { ssr: false });

// Create a simple Apple component
function AppleComponent(props) {
	const {
		size = 400,
		color = "#FF7CC3",
		className = "",
		opacity = 0.7,
		segments = 24,
		rotationSpeed = 0.2,
	} = props;

	return (
		<div
			className={className}
			style={{
				width: `${size}px`,
				height: `${size}px`,
				position: 'relative'
			}}
		>
			<DynamicScene>
				<DynamicAppleModel
					color={color}
					opacity={opacity}
					segments={segments}
					rotationSpeed={rotationSpeed}
				/>
			</DynamicScene>
		</div>
	);
}

export const Apple = AppleComponent;
export default dynamic(() => import('./Scene'), { ssr: false });