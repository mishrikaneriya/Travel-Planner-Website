import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import TripCard from './components/TripCard';

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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Wanderlust</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <SearchBar onSearch={(query) => console.log(query)} />
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Trips</h2>
              <div className="space-y-4">
                {trips.map((trip, index) => (
                  <TripCard key={index} {...trip} />
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 h-[calc(100vh-12rem)]">
            <Map
              center={{ lat: 48.8566, lng: 2.3522 }}
              zoom={13}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;