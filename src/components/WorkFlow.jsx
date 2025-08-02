import React from "react";
import WorkFlowImg from "../assets/WorkFlow.png";

const WorkFlow = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 text-center mb-12">
          Built for the way you work
        </h2>
        <div className="flex  lg:flex-row gap-12">
          {/* Left column -Workflow types  */}
          <div className="lg-w-1/4">
            <ul className=" flex space-y-4 gap-5">
              <li>
                <button className="text-left font-bold text-blue-600 w-full py-3 px-8 rounded-full bg-blue-50">
                  Brainstorming
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Diagramming
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Meeting & Workshops
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Scrum Events
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Mapping
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Research & Design
                </button>
              </li>
              <li>
                <button className=" text-left  font-bold text-blue-700 w-full py-3 px-8 rounded-full bg-blue-50">
                  Strategic Planning
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-8xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Brainstroming
              </h1>
              <p className="text-lg text-gray-500 mb-6">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, video, drawing capabilities - the list
                goes on.
              </p>

              <span className="text-blue-600 text-xl">Learn more →</span>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img
                src={WorkFlowImg}
                alt="Work Flow Image of Miro"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
