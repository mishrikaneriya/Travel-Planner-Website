import React, { useState } from 'react';
import { Globe, Menu, X, Plus } from 'lucide-react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import TripCard from './components/TripCard';
import Navigation from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trips = [
    {
      destination: 'Paris, France',
      dates: 'Mar 15 - Mar 22, 2024',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    },
    {
      destination: 'Tokyo, Japan',
      dates: 'Apr 1 - Apr 10, 2024',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Travel Planner</h1>
              <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-1" />
                New Trip
              </button>
            </div>
            
            <SearchBar onSearch={(query) => console.log(query)} />
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Your Trips</h2>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>All Trips</option>
                  <option>Upcoming</option>
                  <option>Past</option>
                </select>
              </div>
              <div className="space-y-4">
                {trips.map((trip, index) => (
                  <TripCard key={index} {...trip} />
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h2>
              <p className="text-sm text-gray-600">Explore destinations and plan your route</p>
            </div>
            <div className="h-[calc(100vh-16rem)] rounded-xl overflow-hidden shadow-sm">
              <Map
                center={{ lat: 48.8566, lng: 2.3522 }}
                zoom={13}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;