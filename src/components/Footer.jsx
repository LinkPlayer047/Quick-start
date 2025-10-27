import { Github, ShieldAlert, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="px-6 py-6 mx-auto lg:mt-32 lg:px-8">
        <footer className="container">
          <div className="rounded-lg border border-gray-300 lg:border-none bg-gray-50 flex flex-col md:flex-row lg:flex-1 lg:items-start items-center px-8 py-12 gap-8">
            <div>
              <a className="flex flex-1 gap-2 items-center" href="">
                <img
                  className="object-cover max-w-20 max-h-14"
                  src="/GMS logo.png"
                  alt="GMS Logo"
                />
              </a>
            </div>

            <div
              id="nav-menu"
              className="gap-3 flex flex-col flex-1 items-center"
            >
              <a href="#" className="font-medium hover:text-blue-600">
                Home
              </a>
              <a href="#" className="font-medium hover:text-blue-600">
                About us
              </a>
              <a href="#" className="font-medium hover:text-blue-600">
                Services
              </a>
              <a href="#" className="font-medium hover:text-blue-600">
                Privacy Policy
              </a>
            </div>

            <div className="flex items-center gap-5 flex-col">
              <a href="link" className="font-light">
                Documentation
              </a>
              <div className="flex gap-8">
                <a href="link" className="text-gray-500 hover:text-gray-900">
                  <Twitter />
                </a>
                <a href="link" className="text-gray-500 hover:text-gray-900">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div
        id="subfooter"
        className="flex items-center flex-col justify-center gap-6 my-5"
      >
        <div className="flex gap-2 items-center">
          <ShieldAlert />
          <p className="text-sm text-gray-500">A Y Combinator Company</p>
        </div>
        <p className="text-sm text-gray-400">
          @ 2025 GMS Agency.All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
