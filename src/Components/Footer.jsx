import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      
      <footer className="p-4 bg-teal-500 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 footer">
        <span className="text-sm text-gray-500 sm:text-center dark:text-white text-2xl">
          © 2022{" "}
          <a
            href="https://www.linkedin.com/in/fortunatus-ihedoro/"
            target="_blank"
            className="hover:underline text-white no-underline"
          >
            Fortune™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink
              to="/"
              className="mr-4 hover:underline md:mr-6 no-underline text-2xl text-white"
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fortunatus-ihedoro/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 text-2xl"
            >
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fortuneonyeka/full-ecommerce-with-firebase"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 text-2xl "
            >
              <span>
                <i className="fa fa-github"></i>
              </span>
            </a>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:underline no-underline text-2xl text-white"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
