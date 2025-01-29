import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const events = [
  {
    name: "Eyantra Hackathon 24",
    logo: "/path/to/logo1.png", // Replace with actual logo path
    photos: [
      "/public/gallery/Eyantra Hackathon 24/1.jpg",
      "/public/gallery/Eyantra Hackathon 24/3.jpg",
      "/public/gallery/Eyantra Hackathon 24/4.jpg",
      "/public/gallery/Eyantra Hackathon 24/5.jpg",
      "/public/gallery/Eyantra Hackathon 24/6.jpg",
    ],
  },
  {
    name: "eYRTC_24-teachers competition",
    logo: "/path/to/logo2.png", // Replace with actual logo path
    photos: [
      "/public/gallery/eYRTC_24-teachers competition/1.JPG",
      "/public/gallery/eYRTC_24-teachers competition/2.JPG",
      "/public/gallery/eYRTC_24-teachers competition/3.JPG",
      "/public/gallery/eYRTC_24-teachers competition/4.JPG",
      "/public/gallery/eYRTC_24-teachers competition/5.JPG",
      "/public/gallery/eYRTC_24-teachers competition/6.JPG",
      "/public/gallery/eYRTC_24-teachers competition/7.JPG",
    ],
  },
  {
    name: "Workshop on Digital Twin_24",
    logo: "/path/to/logo3.png", // Replace with actual logo path
    photos: [
      "/public/gallery/Workshop on Digital Twin_24/Dt (1).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (2).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (3).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (4).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (5).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (6).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (7).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (8).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (9).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (10).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (11).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (12).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (13).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (14).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (15).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (16).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (17).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (18).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (19).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (20).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (21).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (22).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (23).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (24).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (25).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (26).jpg",
      "/public/gallery/Workshop on Digital Twin_24/Dt (27).jpg",
    ],
  },
  {
    name: "Workshop on IIOT 24",
    logo: "/path/to/logo4.png", // Replace with actual logo path
    photos: [
      "/public/gallery/Workshop on IIOT_24/Wo (1).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (2).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (3).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (4).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (5).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (6).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (7).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (8).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (9).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (10).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (11).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (12).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (13).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (14).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (15).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (16).jpg",
      "/public/gallery/Workshop on IIOT_24/Wo (17).jpg",
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
              <img src={event.logo} alt={event.name} className="w-full h-32 object-cover mb-4" />
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