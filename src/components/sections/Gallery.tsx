import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const events = [
  {
    name: "Eyantra Hackathon 24",
    logo: "/gallery/Eyantra Hackathon 24/2.jpg", 
    photos: [
      "/gallery/Eyantra Hackathon 24/1.jpg",
      "/gallery/Eyantra Hackathon 24/3.jpg",
      "/gallery/Eyantra Hackathon 24/4.jpg",
      "/gallery/Eyantra Hackathon 24/5.jpg",
      "/gallery/Eyantra Hackathon 24/6.jpg",
    ],
  },
  {
    name: "eYRTC_24-teachers competition",
    logo: "/gallery/eYRTC_24-teachers competition/1.JPG", 
    photos: [
      "/gallery/eYRTC_24-teachers competition/1.JPG",
      "/gallery/eYRTC_24-teachers competition/2.JPG",
      "/gallery/eYRTC_24-teachers competition/3.JPG",
      "/gallery/eYRTC_24-teachers competition/4.JPG",
      "/gallery/eYRTC_24-teachers competition/5.JPG",
      "/gallery/eYRTC_24-teachers competition/6.JPG",
      "/gallery/eYRTC_24-teachers competition/7.JPG",
    ],
  },
  {
    name: "Workshop on Digital Twin_24",
    logo: "/gallery/Workshop on Digital Twin_24/Dt (7).jpg", 
    photos: [
      "/gallery/Workshop on Digital Twin_24/Dt (1).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (2).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (3).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (4).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (5).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (6).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (7).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (8).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (9).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (10).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (11).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (12).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (13).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (14).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (15).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (16).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (17).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (18).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (19).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (20).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (21).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (22).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (23).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (24).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (25).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (26).jpg",
      "/gallery/Workshop on Digital Twin_24/Dt (27).jpg",
    ],
  },
  {
    name: "Workshop on IIOT 24",
    logo: "/gallery/Workshop on IIOT_24/Wo (1).jpg",
    photos: [
      "/gallery/Workshop on IIOT_24/Wo (1).jpg",
      "/gallery/Workshop on IIOT_24/Wo (2).jpg",
      "/gallery/Workshop on IIOT_24/Wo (3).jpg",
      "/gallery/Workshop on IIOT_24/Wo (4).jpg",
      "/gallery/Workshop on IIOT_24/Wo (5).jpg",
      "/gallery/Workshop on IIOT_24/Wo (6).jpg",
      "/gallery/Workshop on IIOT_24/Wo (7).jpg",
      "/gallery/Workshop on IIOT_24/Wo (8).jpg",
      "/gallery/Workshop on IIOT_24/Wo (9).jpg",
      "/gallery/Workshop on IIOT_24/Wo (10).jpg",
      "/gallery/Workshop on IIOT_24/Wo (11).jpg",
      "/gallery/Workshop on IIOT_24/Wo (12).jpg",
      "/gallery/Workshop on IIOT_24/Wo (13).jpg",
      "/gallery/Workshop on IIOT_24/Wo (14).jpg",
      "/gallery/Workshop on IIOT_24/Wo (15).jpg",
      "/gallery/Workshop on IIOT_24/Wo (16).jpg",
    ],
  },
  {
    name: "Eyantra Symposium 2024",
    logo: "/gallery/Eyantra Symposium 2024/IT (3).jpg",
    photos: [
      "/gallery/Eyantra Symposium 2024/IT (1).jpg",
      "/gallery/Eyantra Symposium 2024/IT (7).jpg",
      "/gallery/Eyantra Symposium 2024/IT (2).jpg",
      "/gallery/Eyantra Symposium 2024/IT (3).jpg",
      "/gallery/Eyantra Symposium 2024/IT (5).jpg",
      "/gallery/Eyantra Symposium 2024/IT (6).jpg",
      "/gallery/Eyantra Symposium 2024/IT (8).jpg",
      "/gallery/Eyantra Symposium 2024/IT (9).jpg",
      "/gallery/Eyantra Symposium 2024/IT (10).jpg",
      "/gallery/Eyantra Symposium 2024/IT (11).jpg",
      "/gallery/Eyantra Symposium 2024/IT (12).jpg",
      "/gallery/Eyantra Symposium 2024/IT (13).jpg",
      "/gallery/Eyantra Symposium 2024/IT (14).jpg",
      "/gallery/Eyantra Symposium 2024/IT (15).jpg",
      "/gallery/Eyantra Symposium 2024/IT (16).jpg",
      "/gallery/Eyantra Symposium 2024/IT (17).jpg",
      "/gallery/Eyantra Symposium 2024/IT (18).jpg",
      "/gallery/Eyantra Symposium 2024/IT (19).jpg",
      "/gallery/Eyantra Symposium 2024/IT (20).jpg",
      "/gallery/Eyantra Symposium 2024/IT (21).jpg",
      "/gallery/Eyantra Symposium 2024/IT (22).jpg",
      "/gallery/Eyantra Symposium 2024/IT (23).jpg",
      "/gallery/Eyantra Symposium 2024/IT (24).jpg",
      "/gallery/Eyantra Symposium 2024/IT (25).jpg",
      "/gallery/Eyantra Symposium 2024/IT (26).jpg",
      "/gallery/Eyantra Symposium 2024/IT (27).jpg",
      "/gallery/Eyantra Symposium 2024/IT (28).jpg",
      "/gallery/Eyantra Symposium 2024/IT (29).jpg",
      "/gallery/Eyantra Symposium 2024/IT (30).jpg",
      "/gallery/Eyantra Symposium 2024/IT (31).jpg",
      "/gallery/Eyantra Symposium 2024/IT (32).jpg",
      "/gallery/Eyantra Symposium 2024/IT (33).jpg",
      "/gallery/Eyantra Symposium 2024/IT (34).jpg",
      "/gallery/Eyantra Symposium 2024/IT (35).jpg",
      "/gallery/Eyantra Symposium 2024/IT (36).jpg",
      "/gallery/Eyantra Symposium 2024/IT (37).jpg",
    ],
  },
];

type VantaEffect = {
  destroy: () => void;
};

const Gallery: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
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

  const openPopup = (photos: string[]) => {
    setSelectedPhotos(photos);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedPhotos([]);
  };

  return (
    <div ref={vantaRef} className="min-h-screen">
      <div className="container mx-auto px-4 pl-10 pr-10 py-8 pt-20">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Events Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
          {events.map((event, index) => (
            <div key={index} className="group relative cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow" onClick={() => openPopup(event.photos)}>
              <img src={event.logo} alt={event.name} className="w-full h-56 object-cover mb-4" />
              <h2 className="text-xl font-semibold text-center">{event.name}</h2>
            </div>
          ))}
        </div>

        {/* Popup for Photos */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded-lg relative max-w-5xl max-h-[80%] overflow-auto shadow-lg">
              {/* Close Button */}
              <button 
                onClick={closePopup} 
                className="absolute top-2 right-2 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Close
              </button>
              {/* Two-column layout for images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPhotos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;