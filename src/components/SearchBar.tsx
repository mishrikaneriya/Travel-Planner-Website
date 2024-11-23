import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="relative w-full">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Where do you want to go?"
            className="w-full px-4 py-3 pl-12 text-gray-700 bg-white rounded-t-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        
        {isExpanded && (
          <div className="absolute w-full bg-white rounded-b-lg shadow-lg border-t z-10">
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-md text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Users className="w-4 h-4 inline mr-2" />
                  Travelers
                </label>
                <select className="w-full px-3 py-2 border rounded-md text-sm">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ People</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search Destinations
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;