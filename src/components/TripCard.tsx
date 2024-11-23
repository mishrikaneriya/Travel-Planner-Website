import React from 'react';
import { Calendar, MapPin, Heart, Share2 } from 'lucide-react';

interface TripCardProps {
  destination: string;
  dates: string;
  image: string;
}

const TripCard: React.FC<TripCardProps> = ({ destination, dates, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
      <div className="relative h-48">
        <img
          src={image}
          alt={destination}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors">
            <Heart className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl mb-1">{destination}</h3>
          <div className="flex items-center space-x-3">
            <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {dates}
            </span>
            <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              View Map
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-600">Trip Status</div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Confirmed</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;