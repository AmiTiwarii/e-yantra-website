import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const images = [  
  "/gallery/P1.jpg",
  "/gallery/P2.jpg",
  "/gallery/P3.jpg",
  "/gallery/P4.jpg",
  "/gallery/P5.jpg",
  "/gallery/P6.jpeg",
  "/gallery/P7.jpeg",
  "/gallery/P8.jpeg",
  "/gallery/P9.jpeg",
  "/gallery/P10.jpeg",
];

type VantaEffect = {
  destroy: () => void;
};

const Gallery: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="min-h-screen">
      <div className="container mx-auto px-4 pl-10 pr-10 py-8 pt-20">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Lab Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;