// src/app/_components/GlitchModel.tsx
import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, MeshDistortMaterial, Wireframe } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const Model = ({ glitch }) => {
	const mesh = useRef();
	const { nodes } = useGLTF('/models/corset.glb');

	const props = useSpring({
		distort: glitch ? 0.4 : 0,
		wireframe: glitch ? 1 : 0,
		config: { tension: 300 }
	});

	return (
		<animated.mesh ref={mesh} geometry={nodes.corset.geometry}>
			<MeshDistortMaterial distort={props.distort} color="#ffb6c1" />
			<Wireframe visible={props.wireframe} color="#ff00ff" />
		</animated.mesh>
	);
};