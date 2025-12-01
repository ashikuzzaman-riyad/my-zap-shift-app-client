import React, { useRef, useState } from "react";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const AssignRider = () => {
  const [selectedParcel, setSelectedParcel] = useState(null)
  const RiderRef = useRef()
  const axiosSecure = useSecureAxios();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcel", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });
  
    const {data: rider = []} = useQuery({
      queryKey: ['parcel', selectedParcel?.senderDistrict, 'available'],
      enabled: !!setSelectedParcel,
      queryFn: async () => {
        const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}$workStatus=available`)
        return res.data
      }
    })

  const handleRiderOpenModal = parcel => {
    setSelectedParcel(parcel)
    RiderRef.current.showModal()
  }
  return (
    <div>
      <h1 className="text-3xl my-10 text-center">
        assign a rider {parcels.length}{" "}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td>
                  <button onClick={() => handleRiderOpenModal(parcel)} className="bg-primary btn">Assign Rider</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <dialog ref={RiderRef} className="modal">
        <div className="modal-box">
          <h2>Rider {rider.length}</h2>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;
