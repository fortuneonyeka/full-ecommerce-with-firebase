import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Components/Layout";

const LoginPage = () => {
  return (
    <Layout >
      <div className="w-full max-w-xs mx-auto w-50 my-64">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Please enter your correct password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <NavLink
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="#"
          >
            Forgot Password?
          </NavLink>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Acme Corp. All rights reserved.
      </p>
      </div>
    </Layout>
  );
};

export default LoginPage;
