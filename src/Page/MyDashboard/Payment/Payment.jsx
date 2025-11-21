import React from "react";
import { useParams } from "react-router";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Loader/Loader";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useSecureAxios();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      SenderEmail: parcel.SenderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  return (
    <div>
      <h2>
        plisse pay{parcel.cost} for {parcel.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        pay
      </button>
    </div>
  );
};

export default Payment;
