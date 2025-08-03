import React from "react";

const CTA = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#050038] ">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-20 gap-y-20 mb-12">
          {/* Product Column */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Products</h2>
            <ul className="space-y-2">
              {[
                "Apps & Integrations",
                "Templates",
                "Mirosense",
                "Miro Developer Platform",
                "Miro for Devices",
                "Security & Compliance",
                "Accessibility",
                "Chargeling",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lg text-white hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Solution Column */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Solutions</h2>
            <ul className="space-y-2">
              {[
                "Meetings and Workshops",
                "Brainstorming & Ideation",
                "Agile Workflows",
                "Diagramming",
                "Research & Design",
                "Strategy & Planning",
                "Mind Map",
                "Concept Maps",
                "Online Sticky Notes",
                "Flowchart",
                "WireTraining",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lg text-white hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources Column */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              {[
                "Miro Academy",
                "Help Center",
                "Blog",
                "Status",
                "Miro Community",
                "Miro Professional Network",
                "Miro Expert's Directory",
                "Miro Events",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lg text-white hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Pricing Columns */}

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              {[
                "About us",
                "Careers ✓",
                "Miro in the News",
                "Customer Stories",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lg text-white hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Plans and Pricing
            </h2>
            <ul className="space-y-2">
              {[
                "Pricing",
                "Business",
                "Enterprise",
                "Consultants",
                "Education",
                "Startups",
                "NPCs",
                "Contact sales...→",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lg text-white hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
