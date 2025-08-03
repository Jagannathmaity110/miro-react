import React from "react";
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from "react-feather";

const Footer = () => {
  const socialIcons = [
    { icon: <Twitter size={18} />, label: "Twitter" },
    { icon: <Instagram size={18} />, label: "Instagram" },
    { icon: <Facebook size={18} />, label: "Facebook" },
    { icon: <Linkedin size={18} />, label: "LinkedIn" },  // Note: 'Linkedin' not 'LinkedIn'
    { icon: <Youtube size={18} />, label: "YouTube" }      // Note: 'Youtube' not 'YouTube'
  ];

  return (
    <footer className="bg-white py-6 px-4 sm:px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright and links */}
          <div className="flex flex-col sm:flex-row items-center mb-4 md:mb-0">
            <span className="text-sm text-gray-500 mb-2 sm:mb-0 sm:mr-6">
              © {new Date().getFullYear()}  Jagannath Maity Miro
            </span>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Manage Cookies
              </a>
            </div>
          </div>

          {/* Right side - Social icons */}
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                aria-label={social.label}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;