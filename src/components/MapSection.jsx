// FEATURE {
//     Multiple location support
//     Interactive map switching
//     Get Directions functionality
// }

import { useState } from 'react';

function MapSection() {
  const locations = [
    // DUMMY LOCT ON THIS. REPLACE TO ACTUAL LOCT
    {
      name: "Wedding Ceremony",
      address: "KUA, KESEJAHTERAAN BERSAMA",
      time: "4:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345"
    },
    {
      name: "Reception Venue",
      address: "BALAI DESA RT 05",
      time: "6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67890"
    }
  ];

  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="py-12 px-4 sm:px-8 bg-pink-50" id="points">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">📍 Wedding Locations</h2>
        <p className="text-center text-lg text-pink-600 mb-8">Find your way to our special moments</p>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3 space-y-4">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeLocation === index ? 'bg-pink-200 shadow-md border-l-4 border-pink-500' : 'bg-white hover:bg-pink-100'}`}
              >
                <h3 className="font-bold text-lg text-gray-800">{location.name}</h3>
                <p className="text-gray-600">{location.address}</p>
                <p className="text-pink-600 font-medium mt-2">⏰ {location.time}</p>
              </button>
            ))}
          </div>
          
          <div className="md:w-2/3">
            <div className="relative pb-3/4 h-96 md:h-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src={locations[activeLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`Map to ${locations[activeLocation].name}`}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locations[activeLocation].address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default MapSection;