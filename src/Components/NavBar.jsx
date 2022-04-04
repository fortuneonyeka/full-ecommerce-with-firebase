import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./Buttons/CartBtn";


const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink to="/" className=" text-3xl tracking-tight no-underline font-bold mt-3 border divide-gray-700 > * border-solid rounded-full text-indigo p-3">Firbase</NavLink>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ps-5">
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/"
              className="block mt-3  lg:inline-block lg:mt-0 text-teal-200 text-white mr-4 text-4xl no-underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className="block mt-3 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4 text-4xl no-underline"
            >
              Product
            </NavLink>
            <NavLink
              to="/contact"
              className="block mt-3 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-blue-300 text-4xl no-underline"
            >
              Contact Us
            </NavLink>
          </div>
         
          <NavLink to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded no-underline px-3 mr-3">  <span className="fa fa-sign-in me-1"></span>Login</NavLink>
          <NavLink to="/registration" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded px-3  no-underline mr-3"><span className="fa fa-user-plus me-1"></span>SingUp</NavLink>
          <CartBtn />
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
