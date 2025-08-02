import React from "react";

const TrustBadge = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-300 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading  */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why companies large <br />
            and small trust Miro
          </h2>
          <p className="text-xl text-gray-700 underline">
            Contact Sales to request a demo
          </p>
        </div>
        {/* Badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              ISO 9001
            </h3>
            <p className="text-gray-600 text-center">$100 million</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              ISO 27001
            </h3>
            <p className="text-gray-600 text-center">$100 million</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              ISO 27001
            </h3>
            <p className="text-gray-600 text-center">Enterprise-grade security compliant</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Visual Collaboration Platform
            </h3>
            <p className="text-gray-600 text-center">On G2</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Fortune 100
            </h3>
            <p className="text-gray-600 text-center">are customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              24/7 
            </h3>
            <p className="text-gray-600 text-center">are available</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-4xl font-bold text-blue-600 mb-2">1,000+</p>
            <p className="text-gray-600">
              community- and expert-built templates
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-4xl font-bold text-blue-600 mb-2">45M+</p>
            <p className="text-gray-600">users around the world</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-4xl font-bold text-blue-600 mb-2">100+</p>
            <p className="text-gray-600">
              integrations with technology partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
