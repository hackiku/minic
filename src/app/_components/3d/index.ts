// src/app/_components/3d/index.ts

// Re-export components for easier imports
export { default as Scene } from './Scene';
export * from './data/colors';

// World components
export { default as AppleModel } from './world/AppleModel';
export { default as Camera } from './world/Camera';
export { default as Glitter } from './world/Glitter';

// Composite Apple component
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports
const DynamicScene = dynamic(() => import('./Scene'), { ssr: false });
const DynamicAppleModel = dynamic(() => import('./world/AppleModel'), { ssr: false });

// Create the Apple component (only once)
function AppleComponent({
	size = 400,
	color = "#FF7CC3",
	className = "",
	opacity = 0.7,
	segments = 24,
	rotationSpeed = 0.2,
}) {
	return (
		<div
      className= { className }
	style = {{ width: `${size}px`, height: `${size}px`, position: 'relative' }
}
    >
	<DynamicScene>
	<DynamicAppleModel
          color={ color }
opacity = { opacity }
segments = { segments }
rotationSpeed = { rotationSpeed }
	/>
	</DynamicScene>
	</div>
  );
}

// Export the Apple component
export const Apple = AppleComponent;

// Default export is the Scene component
export default Scene;