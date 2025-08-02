import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      company: "VMware",
      quote: "When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
      author: "Roxanne Mustafa",
      position: "Design Team Lead at VMware"
    },
    {
      company: "DocuSign",
      quote: "Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
      author: "Jane Ashley",
      position: "Head of Design at DocuSign"
    },
    {
      company: "frog",
      quote: "As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that's at the core of what we do and will continue to extend into the future.",
      author: "Laura Baird",
      position: "Associate Design Director at frog"
    }
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading for testimonials */}
        <h2 className="text-3xl lg:text-4xl text-gray-900 font-bold text-center mt-8">
          Loved by the world's best teams
        </h2>
        <button className="px-6 py-3 border border-blue-400 text-blue-600 rounded-full items-center mt-4 block mx-auto text-lg">
          See all customer stories →
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {testimonial.company}
            </h3>
            <blockquote className="text-gray-600 text-sm italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="border-t border-gray-100 pt-3">
              <p className="font-medium text-gray-800 text-sm">{testimonial.author}</p>
              <p className="text-gray-500 text-xs">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;