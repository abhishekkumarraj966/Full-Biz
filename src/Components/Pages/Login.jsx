import React from "react";
import { Link } from "react-router-dom";

const Clicknow = () => {
  return (
    <div className="">
      <div className="min-h-screen flex  justify-center items-center bg-gray-100 Clicknow">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
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
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <Link to="#hello">
              <p className="text-[#3B82f6]  mt-[-20px] mb-2 cursor-pointer">
                Forget password
              </p>
            </Link>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              {/* <Link to="/signeup">
                <button
                  type="submit"
                  className="  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Signup
                </button>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Clicknow;
