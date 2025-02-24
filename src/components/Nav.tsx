import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiHome, FiInfo, FiImage, FiPhone, FiCalendar } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import social icons

interface NavProps {
  setActiveComponent: (component: string) => void;
}

const Nav: React.FC<NavProps> = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showText, setShowText] = useState(isOpen);

  // Delay the text appearance for smooth transition
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowText(true), 800); // Adjust delay time
      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isOpen]);

  return (
    <nav
      className={`${
        isOpen ? "w-32" : "w-16"
      } transition-all duration-800 h-full flex flex-col relative`}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-2 right-[-10px] bg-gray-300 p-1 rounded-full shadow-md hover:bg-blue-300 hover:opacity-80 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
      </button>

      {/* Navigation Links */}
      <ul className="mt-12 space-y-4 flex flex-col items-start w-full">
        <li className="w-full">
          <button
            onClick={() => setActiveComponent("Home")}
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FiHome size={20} />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Home
              </span>
            )}
          </button>
        </li>

        <li className="w-full">
          <button
            onClick={() => setActiveComponent("About")}
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FiInfo size={20} />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                About
              </span>
            )}
          </button>
        </li>

        <li className="w-full">
          <button
            onClick={() => setActiveComponent("Gallery")}
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FiImage size={20} />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Gallery
              </span>
            )}
          </button>
        </li>
   
        <li className="w-full">
          <button
            onClick={() => setActiveComponent("Scheduling")}
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FiCalendar size={20} />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Booking
              </span>
            )}
          </button>
        </li>

        <li className="w-full">
          <button
            onClick={() => setActiveComponent("Contact")}
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FiPhone size={20} />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Contact
              </span>
            )}
          </button>
        </li>
      </ul>

      {/* Social Media Links (Just Like Other Nav Buttons) */}
      <ul className="mt-auto space-y-4 flex flex-col items-start w-full pb-4">
        <li className="w-full">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-blue-300 hover:opacity-40 active:bg-blue-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaFacebook size={20} className="text-blue-600" />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Facebook
              </span>
            )}
          </a>
        </li>

        <li className="w-full">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-2 w-full rounded-md hover:bg-pink-300 hover:opacity-40 active:bg-pink-400 transition ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <FaInstagram size={20} className="text-pink-500" />
            {showText && (
              <span className={`ml-3 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-10px]"}`}>
                Instagram
              </span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
