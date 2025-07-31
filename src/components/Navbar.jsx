import React from "react";
import Logo from "../assets/Miro Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left side of navbar */}
      <div className="flex items-center space-x-8 pl-40">
        <img src={Logo} alt="MiroLogo " className="h-8" />
      </div>

      <div className=" flex justify-center text-center mx-auto md:flex space-x-6">
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
          Products
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold ">
          Solutions
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
          Resources
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
          Enterprise
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">
          Pricing
        </a>
      </div>
      {/* Right side of navbar */}
      <div className="flex items-center space-x-4 pr-40">
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">Contact Sales</a>
        <a href="#" className="text-gray-800 hover:text-blue-600 font-bold">Login</a>
        <button className="bg-blue-500 text-white rounded-full px-10 py-4">Sign up free →</button>
      </div>
    </nav>
  );
};

export default Navbar;
