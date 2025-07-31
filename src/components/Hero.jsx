import React from "react";
import HeroImg from "../assets/Hero.png";
import RatingImg from "../assets/rating.png";
import CompanyImg from "../assets/Company.png";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content (Left side) */}
          <div className="lg:w-1/2 text-center lg:text-left space-x-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Take ideas from <br />
              better to best
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Miro is your team's visual platform to coonect,
              <br /> collaborate, and create - together.
            </p>
            <div className="max-w-md  mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-grow px-4 py-3  border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-3 rounded-full font-medium flex-grow">
                  Sign up free
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 pt-2">
                Collaborate with your team in minutes
              </p>
              <img src={RatingImg} alt="Rating Image" className="pt-6" />
            </div>
          </div>
          {/* Image (Right side) */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={HeroImg}
              alt="Team collaboration image"
              className="w-full h-auto rounded-lg shadow-xl "
            />
          </div>
        </div>

        {/* Trasted badge section */}
        <div className="flex items-center mt-20 pl-20">
          <img 
          src={CompanyImg}
          alt="Trusted company Image"
          className="w-full h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
