import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import TripCard from '../components/TripCard';
import Map from '../components/Map';
import { PlusCircle, List, MapPin } from 'lucide-react';

const Dashboard = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const trips = [
    {
      destination: 'Bali, Indonesia',
      dates: 'Mar 15-22, 2024',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    },
    {
      destination: 'Paris, France',
      dates: 'Apr 5-12, 2024',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    },
    {
      destination: 'Tokyo, Japan',
      dates: 'May 1-8, 2024',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Trips</h1>
            <p className="mt-1 text-sm text-gray-500">Plan and manage your upcoming adventures</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <PlusCircle className="h-5 w-5 mr-2" />
              Create New Trip
            </button>
          </div>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setView('list')}
            className={`flex items-center px-4 py-2 rounded-md ${
              view === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <List className="h-5 w-5 mr-2" />
            List View
          </button>
          <button
            onClick={() => setView('map')}
            className={`flex items-center px-4 py-2 rounded-md ${
              view === 'map'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <MapPin className="h-5 w-5 mr-2" />
            Map View
          </button>
        </div>

        {view === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip, index) => (
              <TripCard
                key={index}
                destination={trip.destination}
                dates={trip.dates}
                image={trip.image}
              />
            ))}
          </div>
        ) : (
          <div className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
            <Map
              center={{ lat: 20, lng: 0 }}
              zoom={2}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;