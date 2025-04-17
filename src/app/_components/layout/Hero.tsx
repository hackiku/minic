// src/app/_components/layout/Hero.tsx
'use client';

import React, { useEffect, useState } from 'react';
import EmailForm from '../cta/EmailForm';
import WireframeSphere from '../3d/WireframeSphere';

export function Hero() {
  const [sphereSize, setSphereSize] = useState(400);
  
  // Responsive sizing for the sphere
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSphereSize(250);
      } else if (window.innerWidth < 1024) {
        setSphereSize(350);
      } else {
        setSphereSize(450);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 md:pt-24">
        {/* Content Column */}
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-600 leading-tight mb-8">
            Who will you give the apple to?
          </h1>
          
          <div className="max-w-md">
            <EmailForm />
          </div>
        </div>
        
        {/* Visual Column */}
        <div className="relative flex items-center justify-center md:justify-end">
          <WireframeSphere 
            size={sphereSize} 
            className="opacity-80" 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;