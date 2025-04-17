// src/app/_components/3d/world/AppleModel.tsx
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

export default function AppleModel() {
	const meshRef = useRef<Mesh>(null);

	// Simple rotation animation
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh ref={meshRef}>
			<sphereGeometry args={[1, 16, 16]} />
			<meshStandardMaterial color="#ffffff" wireframe={true} />
		</mesh>
	);
}