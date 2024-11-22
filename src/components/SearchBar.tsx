import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
        className="w-full px-4 py-3 pl-12 text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
    </form>
  );
};

export default SearchBar;