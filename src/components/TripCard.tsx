import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TripCardProps {
  destination: string;
  dates: string;
  image: string;
}

const TripCard: React.FC<TripCardProps> = ({ destination, dates, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
          {destination}
        </h3>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{dates}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 mt-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">View on map</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;