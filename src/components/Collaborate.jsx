import React from "react";

const Collaborate = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
          Collaborate without <br /> constraints
        </h1>
        <div className="grid md:grid-cols-3 gap-20 mb-12">
          {/* Feature 1- Free Forever */}
          <div className="bg-white p-6 rounded-lg shodow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Free Forever
            </h2>
            <p className="text-gray-800 text-lg">
              Our free plan gives you unlimited team members,3 boards and 300+
              expert made templates.Signing up with your work email lets you
              bring in you team faster.
            </p>
            <a href="#" className="text-blue-600 hover:underline block mt-2">
              See our pricing plans
            </a>
          </div>
          {/* Feature 2 -Easy Integrations */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Easy Integrations
            </h2>
            <p className="text-lg text-gray-800">
              Miro has 100+ powerfull integrations with tools you already use
              like GSuite,Slack, and Jira,so your workflow is sameless.View the
              full list in our{" "}
              <span className="text-blue-600">Marketplace.</span>
            </p>
          </div>
          {/* Featuer 3 -Security first */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Security First
            </h2>
            <p className="text-gray-800 text-lg">
              We treat your data like you would with the utmost care.We follow
              industry-leading security standards and give you tools to protect
              intellectual property.Learn more at our <span className="text-blue-600">Trust Center</span>
            </p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-900 text-white px-20 py-3 rounded-full font-medium text-lg">Sign up free →</button>
      </div>
    </section>
  );
};

export default Collaborate;
