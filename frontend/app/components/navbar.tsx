"use client";
import React, { useState, FC } from "react";
import Logo from "./logo";
import NavLink from "./nav-link";
// import ServicesModal from "./services-modal";
import ServicesDrawer from "./services-modal";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClose, setIsClose] = useState(false);

  return (
    <header className="flex lg:justify-center justify-between items-center space-x-4 shadow-md p-4  sticky top-0 left-0 right-0 bg-white z-50">
      <Logo />
      <ul className="hidden lg:flex justify-center items-center space-x-4">
        <li>
          <NavLink href="/meet-ramadan" linkName="Meet Ramadan" />
        </li>
        <li>
          <NavLink href="/initiative" linkName="Initiative" />
        </li>
        <li>
          {/* <NavLink
            href="/services-opportunities"
            linkName="Services & Opportunities"
          /> */}
          <button
            onClick={() => setIsClose(true)}
            className="hover:text-secondary"
          >
            Services & Opportunities
          </button>
        </li>
        <li>
          <NavLink href="/gallery" linkName="Gallery" />
        </li>
        <li>
          <NavLink href="/events" linkName="Events" />
        </li>
        <li>
          <NavLink href="/news" linkName="News" />
        </li>
        <NavLink href="/contact-us" linkName="Contact Us" />
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden block cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <>
          <ul className="lg:hidden flex flex-col justify-center items-start px-4 py-4 space-y-5 absolute z-50 top-full md:w-[20%] right-0 bg-white shadow-md">
            <li>
              <NavLink href="/meet-ramadan" linkName="Meet Ramadan" />
            </li>
            <li>
              <NavLink href="/initiative" linkName="Initiative" />
            </li>
            <li>
              {/* <NavLink
                href="/Services-Opportunities"
                linkName="Services & Opportunities"
              /> */}
              <button
                onClick={() => setIsClose(true)}
                className="hover:text-secondary"
              >
                Services & Opportunities
              </button>
            </li>
            <li>
              <NavLink href="/gallery" linkName="Gallery" />
            </li>
            <li>
              <NavLink href="/events" linkName="Events" />
            </li>
            <li>
              <NavLink href="/news" linkName="News" />
            </li>
            <NavLink href="/contact-us" linkName="Contact Us" />
          </ul>
        </>
      )}
      <ServicesDrawer isOpen={isClose} setIsOpen={setIsClose} />
    </header>
  );
};

export default Navbar;
