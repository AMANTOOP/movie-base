import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: icon package

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">🎬 MovieBase</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/genres">Genres</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/subscriptions">Subscriptions</Link></li>
        </ul>

        {/* Auth Buttons (hidden on small) */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-1 rounded border border-gray-300">Log in</button>
          <button className="px-4 py-1 rounded bg-blue-600 text-white">Sign up</button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 px-4">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/genres" onClick={() => setIsOpen(false)}>Genres</Link></li>
            <li><Link to="/trending" onClick={() => setIsOpen(false)}>Trending</Link></li>
            <li><Link to="/subscriptions" onClick={() => setIsOpen(false)}>Subscriptions</Link></li>
          </ul>
          <div className="flex flex-col gap-2 pt-2">
            <button className="px-4 py-1 rounded border border-gray-300">Log in</button>
            <button className="px-4 py-1 rounded bg-blue-600 text-white">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
