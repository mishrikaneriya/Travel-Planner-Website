import React, { useState } from 'react';
import { Globe, ChevronDown, Map, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  items?: { label: string; href: string }[];
  href?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Explore',
    icon: <Map className="w-4 h-4" />,
    items: [
      { label: 'Popular Destinations', href: '#' },
      { label: 'Travel Guides', href: '#' },
      { label: 'Featured Trips', href: '#' }
    ]
  },
  {
    label: 'My Trips',
    icon: <Calendar className="w-4 h-4" />,
    items: [
      { label: 'Upcoming Trips', href: '#' },
      { label: 'Past Trips', href: '#' },
      { label: 'Create New Trip', href: '#' }
    ]
  },
  {
    label: 'Account',
    icon: <Settings className="w-4 h-4" />,
    items: [
      { label: 'Profile Settings', href: '#' },
      { label: 'Preferences', href: '#' },
      { label: 'Sign Out', href: '#' }
    ]
  }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Wanderlust</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {item.items && activeDropdown === item.label && (
                  <div className="absolute z-50 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </button>
                {item.items && activeDropdown === item.label && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;