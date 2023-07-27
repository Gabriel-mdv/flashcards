import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#eea727] p-4 flex items-center justify-between">
      {/* Left side - FC logo */}
      <div className="flex items-center">
        <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mr-2">
          <span className="text-2xl font-bold text-[#eea727]">FC</span>
        </div>
        <span className="text-white text-xl font-semibold">Flashcards</span>
      </div>

      {/* Center - Create New button */}
      <button className="bg-white text-[#eea727] py-2 px-4 rounded-lg mx-2 font-semibold">
        Create New
      </button>

      {/* Right side - Delete All button */}
      <button className="bg-white text-red-500 py-2 px-4 rounded-lg font-semibold">
        Delete All
      </button>
    </nav>
  );
};


export default Navbar;