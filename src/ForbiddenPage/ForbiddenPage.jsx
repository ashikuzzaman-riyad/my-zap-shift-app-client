import React from "react";
import { Link } from "react-router";

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-lg text-center border border-gray-100">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-md mb-6">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path d="M12 9v4m0 4h.01M5.07 19h13.86a2 2 0 001.74-3l-6.93-12a2 2 0 00-3.48 0l-6.93 12a2 2 0 001.74 3z" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-900">403 Forbidden</h1>

        <p className="mt-3 text-gray-600 leading-relaxed">
          You don’t have permission to access this page.
          <br />
          If you think this is a mistake, please contact support.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to='/'
            className="px-5 py-2.5 bg-gray-900 text-white rounded-xl font-medium shadow hover:opacity-95 transition"
          >
            Go Home
          </Link>

          <Link to='/dashboard/my-parcels'
            href="mailto:support@example.com"
            className="px-5 py-2.5 bg-white border rounded-xl font-medium shadow hover:bg-gray-50 transition"
          >
           My parcel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
