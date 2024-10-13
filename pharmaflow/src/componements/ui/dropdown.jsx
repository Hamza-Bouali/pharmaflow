import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react'; 

const DashboardDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  // Handle option selection
  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  }, [onSelect]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      <div className="relative inline text-left w-full" ref={dropdownRef}>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md border border-white-100 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
        >
        
          {selectedOption.label}
          <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
        </button>

        {isOpen && (
          <div 
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"  // Set z-index to 50
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <a
                  key={option.value}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(option);
                  }}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDropdown;
