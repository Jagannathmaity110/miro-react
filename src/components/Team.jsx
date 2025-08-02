import React from "react";
import LogoDesignImg from "../assets/logosdesign.png";
import UxDesignImg from "../assets/uxdesign.png";

const Team = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-center">
          Built for all kinds of teams
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - buttons */}
          <div className="lg:w-1/3">
            <ul className="space-y-4">
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  UX & Design
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Marketing
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Product Management
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Engineering
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Consultants
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Agile Coaches
                </button>
              </li>
              <li>
                <button className="text-left font-light text-blue-600 w-full py-3 px-4 rounded-full bg-blue-50">
                  Sales
                </button>
              </li>
            </ul>
          </div>

          {/* Right column - content and image */}
          <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
            {/* Text content */}
            <div className="lg:w-1/2">
              <div className="mt-10">
                <p className="text-gray-800 text-xl">
                  <span className="text-green-600 mr-2">&#10003;</span> Build low-fi wireframes
                </p>
                <p className="text-gray-800 text-xl">
                  <span className="text-green-600 mr-2">&#10003;</span> Involve stakeholder in the design process
                </p>
                <p className="text-gray-800 text-xl">
                  <span className="text-green-600 mr-2">&#10003;</span> Run engaging design workshops
                </p>
              </div>
              <span className="text-blue-600 font-light text-lg mt-6 block">
                Learn more →
              </span>

              <p className="text-gray-700 font-light text-2xl mt-10">
                Integrate your favourite tools
              </p>
              <img
                src={LogoDesignImg}
                alt="Logo for tools"
                className="w-full mt-5"
              />
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center items-start">
              <img 
                src={UxDesignImg} 
                alt="UX Design" 
                className="max-w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;