import React from "react";
import HybridWorkImg from "../assets/HybridWork.png";
import WorkIntegrationImg from "../assets/Work.png";

const Feature = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-center gapy-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-6">
              Work together,
              <br />
              wherever you work
            </h1>
            <p className="text-gray-600 font-light text-lg mb-8">
              In the office,remote,or a mix of the two with Miro,
              <br />
              your team can connect,collaborate, and co-create in <br />
              one space no matter where you are.
            </p>

            <span className="text-blue-600 hover:text-blue-800 text-lg">
              Learn more →
            </span>
          </div>
          <div className="lg:w-1/2">
            <img src={HybridWorkImg} alt="Hybrid work image" />
          </div>
        </div>
      </div>
      {/* Connect Tools Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ml-20">
              Connect <br /> your tools, <br /> close your tabs
            </h1>
            <p className="text-gray-600 font-light text-lg mb-8 ml-20">
              Whether you want to edit your Google Docs, resolve <br />
              Jira issues, or collaborate over Zoom , Miro has 100+ <br />
              integration with tools you already use and love.
            </p>
            <span className="text-blue-600 hover:text-blue-800 text-lg ml-20 ">
              Learn more →
            </span>
          </div>
          <div className="lg:w-1/2 gap-10">
            <img src={WorkIntegrationImg} alt="Working with integration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
