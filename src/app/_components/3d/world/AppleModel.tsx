// src/app/_components/3d/world/AppleModel.tsx
'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Wireframe } from '@react-three/drei';
import * as THREE from 'three';

interface AppleModelProps {
	color?: string;
	opacity?: number;
	wireOpacity?: number;
	segments?: number;
	rotationSpeed?: number;
	floatIntensity?: number;
	size?: number;
}

export function AppleModel({
	color = "#FF7CC3",
	opacity = 0.7,
	wireOpacity = 0.3,
	segments = 24,
	rotationSpeed = 0.2,
	floatIntensity = 0.5,
	size = 1,
}: AppleModelProps) {
	const meshRef = useRef<THREE.Mesh>(null);
	const wireframeRef = useRef<THREE.Mesh>(null);

	// Animation logic
	useFrame((state) => {
		if (meshRef.current) {
			// Smooth rotation
			meshRef.current.rotation.y += rotationSpeed * 0.01;

			// Subtle wobble
			meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;

			// Subtle pulse effect
			if (wireframeRef.current) {
				const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
				wireframeRef.current.scale.set(pulse, pulse, pulse);
			}
		}
	});

	return (
		<Float speed={1.5} floatIntensity={floatIntensity} rotationIntensity={0.1}>
			<group scale={size}>
				{/* Main wireframe sphere */}
				<mesh ref={meshRef}>
					<sphereGeometry args={[1, segments, segments]} />
					<meshBasicMaterial
						color={color}
						wireframe
						transparent
						opacity={opacity}
					/>
				</mesh>

				{/* Enhanced wireframe overlay */}
				<mesh ref={wireframeRef}>
					<sphereGeometry args={[1.02, segments, segments]} />
					<Wireframe
						thickness={0.001}
						stroke={color}
						backfaceStroke={color}
						fillOpacity={0}
						backfaceOpacity={wireOpacity}
					/>
				</mesh>

				{/* Inner spheres with increasing opacity for depth */}
				<mesh>
					<sphereGeometry args={[0.85, segments, segments]} />
					<meshBasicMaterial
						color={color}
						wireframe
						transparent
						opacity={opacity * 0.7}
					/>
				</mesh>

				<mesh>
					<sphereGeometry args={[0.7, segments, segments]} />
					<meshBasicMaterial
						color={color}
						wireframe
						transparent
						opacity={opacity * 0.6}
					/>
				</mesh>

				<mesh>
					<sphereGeometry args={[0.55, segments, segments]} />
					<meshBasicMaterial
						color={color}
						wireframe
						transparent
						opacity={opacity * 0.5}
					/>
				</mesh>

				{/* Center highlight */}
				<mesh>
					<sphereGeometry args={[0.3, segments, segments]} />
					<meshBasicMaterial
						color={color}
						wireframe
						transparent
						opacity={opacity * 0.4}
					/>
				</mesh>
			</group>
		</Float>
	);
}

export default AppleModel;