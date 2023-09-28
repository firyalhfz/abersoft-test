import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setIsOpen(false);
  };

  const dataNav = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "About Us",
      url: "/aboutus",
    },
    {
      title: "References",
      url: "/references",
    },
    {
      title: "Contacts",
      url: "/contacts",
    },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 mt-6">
        {/* Mobile Menu Button */}
        <div className="md:hidden right-10 absolute">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cgrey focus:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className={!isOpen ? "block" : "hidden"}
                fillRule="evenodd"
                d="M3 6h18v-1H3zm0 7h18v-1H3zm0 7h18v-1H3z"
              />
              <path
                className={isOpen ? "block" : "hidden"}
                fillRule="evenodd"
                d="M4 6h16V5H4zm0 6h16v-1H4zm0 6h16v-1H4z"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <Popover.Group className="hidden md:flex items-center lg:gap-x-40 md:gap-x-16">
          {dataNav.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.url}
                className={`text-sm font-semibold leading-6 ${
                  activeLink === index ? "text-primary" : "text-cgrey"
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {item.title}
              </Link>
            );
          })}
        </Popover.Group>
      </nav>

      {/* Responsive Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden ">
          <div className="bg-white px-10 pt-2 pb-4 text-right">
            {dataNav.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  className={`block text-sm font-semibold leading-6 py-2 ${
                    activeLink === index ? "text-primary" : "text-cgrey"
                  }`}
                  onClick={() => handleLinkClick(index)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
