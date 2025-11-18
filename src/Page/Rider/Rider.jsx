import React from "react";
import riderLogo from "../../assets/agent-pending.png";

const Rider = () => {
  return (
    <div className="  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto w-full bg-white shadow-xl rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Text and Form */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Be a <span className="text-green-600">Rider</span> 🛵
            </h1>
            <p className="text-gray-600 mb-10 text-lg">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — **we
              deliver on time, every time.**
            </p>

            {/* --- Form Section --- */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Tell us about yourself
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  />
                </div>

                {/* Age */}
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Your age"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  />
                </div>

                {/* Region */}
                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Region
                  </label>
                  <select
                    id="region"
                    name="region"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm shadow-sm cursor-pointer transition duration-150 ease-in-out"
                  >
                    <option>Select your region</option>
                    <option>Region A</option>
                    <option>Region B</option>
                    <option>Region C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* NID No */}
                <div>
                  <label
                    htmlFor="nid"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NID No
                  </label>
                  <input
                    type="text"
                    name="nid"
                    id="nid"
                    placeholder="NID"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    placeholder="Contact"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
                  />
                </div>
              </div>

              {/* Warehouse */}
              <div>
                <label
                  htmlFor="warehouse"
                  className="block text-sm font-medium text-gray-700"
                >
                  Which wire-house you want to work?
                </label>
                <select
                  id="warehouse"
                  name="warehouse"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm shadow-sm cursor-pointer transition duration-150 ease-in-out"
                >
                  <option>Select wire-house</option>
                  <option>Warehouse X</option>
                  <option>Warehouse Y</option>
                  <option>Warehouse Z</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-gray-800 bg-primary hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Image (Stylized) */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* The image is a stylized representation of a rider on a moped with a package */}
            <div
              className="absolute inset-0 bg-white opacity-40 rounded-xl"
              aria-hidden="true"
            ></div>
            <div className="relative w-full max-w-md">
              <img
                src={riderLogo} // Placeholder for your image file
                alt="Delivery Rider on a Moped"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
