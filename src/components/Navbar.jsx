import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar (Top) */}
      <header className="hidden md:block bg-gradient-to-r from-orange-400 to-red-500 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">🌼 Dashara</div>
            <div className="text-sm opacity-90">
              Stories · Shakti Peethas · Navratri
            </div>
          </div>
          <nav className="space-x-4">
            <Link
              to="/"
              className="px-3 py-1 rounded-md font-medium bg-white/10 hover:bg-white/20"
            >
              Home
            </Link>
            <Link
              to="/stories"
              className="px-3 py-1 rounded-md font-medium bg-white/10 hover:bg-white/20"
            >
              Stories
            </Link>
            <Link
              to="/peethas"
              className="px-3 py-1 rounded-md font-medium bg-white/10 hover:bg-white/20"
            >
              Peethas
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-1 rounded-md font-medium bg-white/10 hover:bg-white/20"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="px-3 py-1 rounded-md font-medium bg-white/10 hover:bg-white/20"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navbar (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
        <div className="flex justify-around items-center p-2">
          <Link
            to="/"
            className="flex flex-col items-center text-sm font-medium hover:bg-white/20 px-3 py-2 rounded-md"
          >
            🏠
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/stories"
            className="flex flex-col items-center text-sm font-medium hover:bg-white/20 px-3 py-2 rounded-md"
          >
            📖
            <span className="text-xs">Stories</span>
          </Link>
          <Link
            to="/peethas"
            className="flex flex-col items-center text-sm font-medium hover:bg-white/20 px-3 py-2 rounded-md"
          >
            🕉️
            <span className="text-xs">Peethas</span>
          </Link>
          <Link
            to="/gallery"
            className="flex flex-col items-center text-sm font-medium hover:bg-white/20 px-3 py-2 rounded-md"
          >
            🖼️
            <span className="text-xs">Gallery</span>
          </Link>
          <Link
            to="/about"
            className="flex flex-col items-center text-sm font-medium hover:bg-white/20 px-3 py-2 rounded-md"
          >
            ℹ️
            <span className="text-xs">About</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
