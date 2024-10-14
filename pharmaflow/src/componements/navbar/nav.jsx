import React,{useState} from "react";
import man from "../assets/man.png";
import { useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');
  const [login, setLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const paths = {
    'Dashboard': '/Dashboard',
    'Inventory Management': '/inventory',
    'Stock Forecasting': '/forecast',
    'Order Management': '/orders',
    'Reports': '/reports',
    'Settings': '/settings'
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    navigate(paths[linkName]);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-8">
      <div className="mx-auto container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {['Dashboard', 'Inventory Management', 'Stock Forecasting', 'Order Management', 'Reports', 'Settings'].map(linkName => (
                <li key={linkName}>
                  <a
                    href="#"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeLink === linkName ? 'text-sky-500' : 'text-gray-700 hover:text-sky-800'
                    }`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(linkName); }}
                  >
                    {linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            {login ? (
              <button onClick={() => {setLogin(false);navigate('/')}} className="px-4 py-2 bg-sky-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Login</span>
              </button>
            ) : (
              <img onClick={() => setLogin(true)} src={man} alt="User" className="w-10 h-10 rounded-full border-2 border-black" />
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-sky-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Dashboard', 'Inventory Management', 'Stock Forecasting', 'Order Management', 'Reports', 'Settings'].map(linkName => (
              <li key={linkName}>
                <a
                  href="#"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeLink === linkName ? 'text-sky-500' : 'text-gray-700 hover:text-sky-800'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(linkName); }}
                >
                  {linkName}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 py-3">
            {login ? (
              <button onClick={() => setLogin(false)} className="w-full px-4 py-2 bg-sky-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Login</span>
              </button>
            ) : (
              <img onClick={() => setLogin(true)} src="/api/placeholder/50/50" alt="User" className="w-10 h-10 rounded-full border-2 border-black mx-auto" />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;