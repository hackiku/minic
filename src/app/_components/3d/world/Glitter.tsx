
'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlitterProps {
	count?: number;
	color?: string;
	size?: number;
	area?: number;
	speed?: number;
}

export function Glitter({
	count = 100,
	color = "#FFFFFF",
	size = 0.05,
	area = 3,
	speed = 0.2
}: GlitterProps) {
	const mesh = useRef<THREE.Points>(null);

	// Generate particles
	const particles = useMemo(() => {
		const temp = [];
		for (let i = 0; i < count; i++) {
			const x = (Math.random() - 0.5) * area;
			const y = (Math.random() - 0.5) * area;
			const z = (Math.random() - 0.5) * area;

			// Random velocity for each particle
			const vx = (Math.random() - 0.5) * 0.01;
			const vy = (Math.random() - 0.5) * 0.01;
			const vz = (Math.random() - 0.5) * 0.01;

			temp.push({ x, y, z, vx, vy, vz });
		}
		return temp;
	}, [count, area]);

	// Generate positions buffer
	const [positions, colors] = useMemo(() => {
		const positions = new Float32Array(count * 3);
		const colors = new Float32Array(count * 3);

		const color = new THREE.Color(color);

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;
			positions[i3] = particles[i].x;
			positions[i3 + 1] = particles[i].y;
			positions[i3 + 2] = particles[i].z;

			// Set color with random alpha
			colors[i3] = color.r;
			colors[i3 + 1] = color.g;
			colors[i3 + 2] = color.b;
		}

		return [positions, colors];
	}, [particles, count, color]);

	// Update particle positions
	useFrame(() => {
		if (!mesh.current) return;

		const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;

			// Update position based on velocity
			particles[i].x += particles[i].vx * speed;
			particles[i].y += particles[i].vy * speed;
			particles[i].z += particles[i].vz * speed;

			// Boundary check - wrap around if out of bounds
			if (Math.abs(particles[i].x) > area / 2) particles[i].vx *= -1;
			if (Math.abs(particles[i].y) > area / 2) particles[i].vy *= -1;
			if (Math.abs(particles[i].z) > area / 2) particles[i].vz *= -1;

			// Update position buffer
			positionArray[i3] = particles[i].x;
			positionArray[i3 + 1] = particles[i].y;
			positionArray[i3 + 2] = particles[i].z;
		}

		mesh.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<points ref={mesh}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={count}
					itemSize={3}
					array={positions}
				/>
				<bufferAttribute
					attach="attributes-color"
					count={count}
					itemSize={3}
					array={colors}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={size}
				vertexColors
				transparent
				opacity={0.6}
				blending={THREE.AdditiveBlending}
			/>
		</points>
	);
}

export default Glitter;