import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  


  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
      {/* Left: Logo and subtitle */}
      
      <div className="flex items-center space-x-2">
      <NavLink to="/">
  <div className="flex items-center">
    <span className="text-orange-500 text-3xl mr-2">✔️</span>
    <span className="text-orange-500 font-bold text-2xl">Amazingtrip</span>
  </div>
</NavLink>
        <span className="hidden sm:inline text-sm text-gray-400 italic ml-2">
          |  <span className="font-semibold">tanu and Team</span> 
        </span>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-orange-500 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Right: Nav links */}
      <div className="hidden sm:flex items-center space-x-8">
      <NavLink className="" to="/booking">
      
      
          <span className="mr-1 hover:text-orange-500">⭑Offers</span> 
              </NavLink>
      
        
          <span className="mr-1" hover>👜</span> Business
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">🧳</span> My Trips
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-orange-500 text-base">
          <span className="mr-1">🛎️</span> Support
        </a>
        {isAuthenticated && <p>
          {user.name}
      </p>
      
        }
       {
        isAuthenticated ? (
        <button className="ml-2 px-5 py-2 cursor-pointer border border-gray-400 rounded hover:bg-orange-500 text-base font-semibold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
        ) : (
          <button className="ml-2 px-5 py-2 cursor-pointer border border-gray-400 rounded hover:bg-orange-500 text-base font-semibold" onClick={() => loginWithRedirect()}>Log In</button>

        )
       }
       
       
        
        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="absolute top-20 left-0 w-full bg-white shadow-md sm:hidden z-50">
    <div className="flex flex-col p-6 space-y-4">
<NavLink to="/booking">
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        ⭑ Offers
      </a>
</NavLink>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        👜 Business
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        🧳 My Trips
      </a>
      <a
        href="#"
        className="text-gray-700 hover:text-orange-500 active:bg-orange-100 px-2 py-1 rounded transition text-base flex items-center"
      >
        🛎️ Support
      </a>
      {
        isAuthenticated ? (
        <button className="ml-2 px-5 py-2 cursor-pointer border border-gray-400 rounded hover:bg-orange-500 text-base font-semibold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
        ) : (
          <button className="ml-2 px-5 py-2 cursor-pointer border border-gray-400 rounded hover:bg-orange-500 text-base font-semibold" onClick={() => loginWithRedirect()}>Log In</button>

        )
       }

      
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
