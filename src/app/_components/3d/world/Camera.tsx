'use client';

import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

interface CameraProps {
	position?: [number, number, number];
	fov?: number;
	near?: number;
	far?: number;
}

export function Camera({
	position = [0, 0, 3],
	fov = 50,
	near = 0.1,
	far = 1000
}: CameraProps) {
	return (
		<PerspectiveCamera
			makeDefault
			position={position}
			fov={fov}
			near={near}
			far={far}
		/>
	);
}

export default Camera;