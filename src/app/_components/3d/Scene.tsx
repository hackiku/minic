// src/app/_components/3d/Scene.tsx
'use client';

import React from 'react';
import type{ ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import Camera from './world/Camera';

interface SceneProps {
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
	cameraPosition?: [number, number, number];
	fov?: number;
}

export function Scene({
	children,
	className = "",
	style = {},
	cameraPosition = [0, 0, 3],
	fov = 50
}: SceneProps) {
	return (
		<div className={className} style={style}>
			<Canvas
				dpr={[1, 2]}
				gl={{
					antialias: true,
					alpha: true,
				}}
			>
				{/* No background color - transparent by default */}

				{/* Default lighting */}
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={1} />

				{/* Camera */}
				<Camera position={cameraPosition} fov={fov} />

				{/* World content */}
				{children}
			</Canvas>
		</div>
	);
}

export default Scene;