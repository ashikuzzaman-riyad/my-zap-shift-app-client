import React from "react";
import riderLogo from "../../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import useSecureAxios from "../../hook/useSecureAxios";
import { useLoaderData } from "react-router";

const Rider = () => {
  const serviceCenter = useLoaderData();
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const duplicateRegion = serviceCenter.map((c) => c.region);
  const region = [...new Set(duplicateRegion)];
  console.log(region);
  const riderRegion = useWatch({ control, name: "riderRegion" });
  const districtsByDistricts = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const onSubmit = (data) => {
    console.log("Form data:", data);
    // You can call your API here to send data
    // Reset form after submission
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center p-4">
      <div className="bg-white container w-full p-8 shadow-2xl rounded-lg">
        {/* Header */}
        <header className="mb-8 border-b border-dashed border-blue-200 pb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Be a Rider 🛵
          </h1>
          <p className="text-gray-500 max-w-xl text-sm">
           Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Left side inputs */}
          <div className="lg:pr-10">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Driving License Number
              </label>
              <input
                type="text"
                placeholder="Driving License Number"
                {...register("drivingLicense", {
                  required: "Driving License Number is required",
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.drivingLicense && (
                <p className="text-red-500 text-sm">
                  {errors.drivingLicense.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Region & District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <select
                  {...register("riderRegion", {
                    required: "Region is required",
                  })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="">Select Region</option>
                  {region.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <p className="text-red-500 text-sm">
                    {errors.region.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <select
                  {...register("RiderDistrict", {
                    required: "District is required",
                  })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="">Select District</option>
                  {districtsByDistricts(riderRegion).map((d, index) => (
                    <option key={index} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="text-red-500 text-sm">
                    {errors.district.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                NID No
              </label>
              <input
                type="text"
                placeholder="NID"
                {...register("nid", { required: "NID is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.nid && (
                <p className="text-red-500 text-sm">{errors.nid.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: "Phone number is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bike Brand Model and Year
              </label>
              <input
                type="text"
                placeholder="Bike Brand Model and Year"
                {...register("bikeModelYear", {
                  required: "Bike info is required",
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.bikeModelYear && (
                <p className="text-red-500 text-sm">
                  {errors.bikeModelYear.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bike Registration Number
              </label>
              <input
                type="text"
                placeholder="Bike Registration Number"
                {...register("bikeRegistrationNumber", {
                  required: "Registration number is required",
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
              {errors.bikeRegistrationNumber && (
                <p className="text-red-500 text-sm">
                  {errors.bikeRegistrationNumber.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Tell Us About Yourself
              </label>
              <textarea
                rows="3"
                placeholder="Tell Us About Yourself"
                {...register("about")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Submit
            </button>
          </div>

          {/* Right side image */}
          <div className="hidden lg:flex items-start justify-center pt-8">
            <img src={riderLogo} alt="Rider Logo" className="max-w-md" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rider;
