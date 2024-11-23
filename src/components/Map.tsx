import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError('Google Maps API key is not configured');
      return;
    }

    const initMap = async () => {
      const loader = new Loader({
        apiKey,
        version: 'weekly',
      });

      try {
        const google = await loader.load();
        if (mapRef.current && !mapInstanceRef.current) {
          mapInstanceRef.current = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: [
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
              },
              {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
              },
            ],
          });
        }
      } catch (error) {
        setError('Failed to load Google Maps');
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center, zoom]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center p-6">
          <p className="text-gray-600 mb-2">{error}</p>
          <p className="text-sm text-gray-500">Please configure your Google Maps API key in the .env file</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />;
};

export default Map;