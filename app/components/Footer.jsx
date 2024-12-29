"use client"
import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { Whatsapp } from "./WhataappSvg";
import { usePathname } from "next/navigation";
export const Footer = ({className=''}) => {
  return (
    <footer className={`flex flex-col gap-3 bg-transparent py-8 text-white mt-auto ${className}`}>
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; 2017 - 2023. TM Talent Management. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/OfficialTMTM"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-instagram"></i>
          </a>
          <a
            href="mailto:info@tmtalentmanagement.com"
            className="text-white hover:text-blue-400"
          >
            <i className="icon-mail2"></i>
          </a>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <li className=" list-none"><Facebook className="hover:cursor-pointer hover:text-blue-700"/></li>
        <li className=" list-none"><Instagram className="hover:cursor-pointer hover:text-pink-700"/></li>
        <li className=" list-none"><Whatsapp/></li>
      </div>
    </footer>
  );
};
