import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 bg-white text-white-800 px-4 py-2 rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 transition"
      >
        Menu <ChevronDownIcon className="w-3 h-3" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
