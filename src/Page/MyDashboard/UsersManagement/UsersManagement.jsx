import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useSecureAxios from "../../../hook/useSecureAxios";

import { FiShield, FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const [textSearch, setTextSearch] = useState()
  const axiosSecure = useSecureAxios();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users", textSearch],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?textSearch=${textSearch}`);
      return res.data;
    },
  });
  const handleMakeAdmin = (data) => {
    const updateRole = {
      role: "admin",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "create a new admin",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirmed It",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "Admin",
              text: `${data.displayName} has been a Admin`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };
  const handleRemoveAdmin = (data) => {
    const updateRole = {
      role: "user",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Remove the admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "user!",
              text: `${data.displayName} has been a user`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between my-5">
        <h2 className="text-3xl ml-5">Users Management {user.length}</h2>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={(e) => setTextSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>

              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Other Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={data.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td>
                  {data.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(data)}
                      className="btn bg-red-500"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(data)}
                      className="btn bg-green-500"
                    >
                      <FiShield />
                    </button>
                  )}
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
