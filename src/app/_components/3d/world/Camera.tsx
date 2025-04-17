// src/app/_components/3d/world/Camera.tsx
'use client';

import React from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Camera({ position = [0, 12, 50] }) {
	return (
		<>
			{/* PerspectiveCamera with default settings */}
			<perspectiveCamera
				position={position}
				fov={50}
				near={0.1}
				far={1000}
				makeDefault
			/>

			{/* OrbitControls for pan/zoom functionality */}
			<OrbitControls
				enablePan={true}
				enableZoom={true}
				enableRotate={true}
			/>
		</>
	);
}