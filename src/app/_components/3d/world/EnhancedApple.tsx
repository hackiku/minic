// src/components/3d/world/EnhancedApple.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Wireframe } from '@react-three/drei';
import type { Mesh, Group } from 'three';
import * as THREE from 'three';
import { BRAND_PINK, BRAND_PINK_LIGHT } from '~/app/_components/3d/data/colors';
import { useTheme } from 'next-themes';

// This would be the path to your apple GLTF model
// For now we'll use a sphere as placeholder
// const MODEL_PATH = '/models/apple.gltf';

export default function EnhancedApple({
	wireframe = true,
	color = BRAND_PINK,
	rotationSpeed = 0.3,
	size = 1,
	position = [0, 0, 0],
	glowIntensity = 0.4,
}) {
	const meshRef = useRef<Mesh>(null);
	const groupRef = useRef<Group>(null);
	const { theme } = useTheme();

	// Determine color based on theme
	const appleColor = theme === 'dark' ? BRAND_PINK_LIGHT : BRAND_PINK;
	const glowColor = theme === 'dark' ? new THREE.Color(BRAND_PINK_LIGHT).multiplyScalar(1.2) : new THREE.Color(BRAND_PINK);

	// If you have a GLTF model, uncomment this
	// const { nodes } = useGLTF(MODEL_PATH);

	// Smooth floating animation
	useFrame(({ clock }) => {
		if (groupRef.current) {
			// Gentle floating motion
			groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;

			// Rotation
			groupRef.current.rotation.y += rotationSpeed * 0.01;
		}

		// Optional additional effect for the mesh
		if (meshRef.current) {
			// Subtle pulse or other effect could be added here
			// For example, a breathing effect:
			const breathe = Math.sin(clock.getElapsedTime() * 0.5) * 0.03 + 1;
			meshRef.current.scale.set(breathe, breathe, breathe);
		}
	});

	// Optional - clean up if using GLTF
	// useEffect(() => {
	//   return () => {
	//     useGLTF.preload(MODEL_PATH);
	//   };
	// }, []);

	return (
		<group ref={groupRef} position={position}>
			{/* Optional ambient light for better visibility */}
			<pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />

			{/* Glow effect */}
			<mesh position={[0, 0, -0.1]}>
				<sphereGeometry args={[size * 1.2, 32, 32]} />
				<meshBasicMaterial
					color={glowColor}
					transparent={true}
					opacity={theme === 'dark' ? glowIntensity * 1.5 : glowIntensity}
					side={THREE.BackSide}
				/>
			</mesh>

			{/* Main apple shape - using sphere as placeholder */}
			<mesh ref={meshRef}>
				<sphereGeometry args={[size, 32, 32]} />
				{wireframe ? (
					<meshStandardMaterial
						color={appleColor}
						wireframe={true}
						emissive={appleColor}
						emissiveIntensity={theme === 'dark' ? 0.6 : 0.4}
					/>
				) : (
					<Wireframe
						thickness={2}
						color={appleColor}
						backfaceColor={theme === 'dark' ? BRAND_PINK : BRAND_PINK_LIGHT}
						fillMix={0.2}
						fillOpacity={theme === 'dark' ? 0.3 : 0.2}
					>
						<meshBasicMaterial color={appleColor} transparent opacity={theme === 'dark' ? 0.15 : 0.1} />
					</Wireframe>
				)}
			</mesh>

			{/* Optional particles or other effects could be added here */}
		</group>
	);
}

// If using GLTF, uncomment this
// useGLTF.preload(MODEL_PATH);