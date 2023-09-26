import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState<number>(0);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
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
      <nav
        className="sticky mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-6 focus:color-primary"
        aria-label="Global"
      >
        <Popover.Group className="hidden lg:flex lg:gap-x-56">
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
    </header>
  );
}
