import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import onicLogo from "/src/assets/images/onic-default.webp";
import Button from "../ctaComponents/Button.jsx";

const navBar = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/plans", label: "Plans" },
  { id: 3, url: "/onicapp", label: "Onic App" },
  { id: 4, url: "/faqs", label: "FAQs" },
  { id: 5, url: "/contact", label: "Contact" },
  { id: 6, url: "/aboutus", label: "About Us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto flex items-center justify-between py-4 px-4 flex-wrap  sticky top-0 z-50 bg-white border-b-2 border-primary-0  rounded-b">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={onicLogo} alt="LOGO" className="w-auto h-6" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex uppercase items-center text-gray-700">
        <ul className="flex space-x-6">
          {navBar.map((item) => (
            <li
              key={item.id}
              className="hover:border-b hover:border-gray-700 transition duration-300"
            >
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button (Visible only on desktop) */}
      <div className="hidden md:block">
        <Button buttonText={"Order SIM"} />
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div
        className="md:hidden text-3xl text-gray-900 cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <RxCrossCircled /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-screen bg-white shadow border z-10 flex flex-col items-start space-y-4 p-4 md:hidden">
          <ul className="space-y-2 w-full">
            {navBar.map((item) => (
              <li key={item.id} className="text-gray-700 w-full">
                <Link
                  to={item.url}
                  className="block w-full p-2 hover:bg-gray-100 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
