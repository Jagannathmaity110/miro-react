import React from "react";

const About = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#050038] rounded-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-white text-center mt-35">
          Join 45M+ users today
        </h2>
        <p className="text-xl text-gray-600 text-center mt-10">
          Start for free -upgrade anytime
        </p>
        <p className="text-2xl text-gray-700 text-center mt-10 underline">
          Joining as an organization ? Contact Sales
        </p>
        <button className="bg-blue-500 hover:bg-blue-900 text-white px-20 py-3 rounded-full font-medium text-lg mt-10 block mx-auto">
          Sign up free →
        </button>
      </div>
    </section>
  );
};

export default About;
