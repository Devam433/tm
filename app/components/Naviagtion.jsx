"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { item: "Home", href: "/" },
    { item: "Exclusive Talent", href: "/exclusive-talent" },
    { item: "About Us", href: "/about-us" },
    { item: "Contact Us", href: "/contact-us" },
    { item: "Career", href: "/career" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative pb-7 z-50">
      {/* Navbar */}
      <Navbar maxWidth="full" className="shadow-md bg-transparent ">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <NavbarBrand>
            <Link href={'/'}>
            <Image
              src="/images/logo.png"
              alt="Talent Management Logo"
              width={140}
              height={140}
              priority
            />
            </Link>
          </NavbarBrand>

          {/* Desktop Menu */}
          <NavbarContent className="hidden sm:flex gap-8" justify="end">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item.item}-${index}`}>
                <Link
                  href={item.href}
                  className={`text-xl font-medium text-gray-100 hover:text-blue-400 transition-all duration-100`}
                >
                  {item.item}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="block sm:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-200" />
            ) : (
              <Menu size={24} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black bg-opacity-90 shadow-lg
          sm:hidden transition-transform duration-300 ease-in-out"
        >
          {menuItems.map((item, index) => (
            <Link
              key={`${item.item}-${index}`}
              href={item.href}
              className={`block w-full text-lg font-medium py-4 px-6 text-white hover:text-blue-400 transition-all duration-100 text-center`}
              onClick={toggleMenu}
            >
              {item.item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
