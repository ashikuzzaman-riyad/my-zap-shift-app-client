import React from 'react';
import { Link } from 'react-router';


const PaymentCancelled = () => {
    return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
<div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
<div className="bg-red-100 p-4 rounded-full mb-4">
{/* cancel icon */}
<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>


<h1 className="text-2xl font-bold text-slate-900">Payment Cancelled</h1>
<p className="text-slate-600 mt-2">Your transaction was not completed. Please try again or choose another payment method.</p>


<div className="mt-6 ">
<Link to='/dashboard/my-parcels' className="btn btn-primary py-3 rounded-lg bg-red-600 text-white font-medium">
Try Again
</Link>
</div>
</div>
</div>
    );
};

export default PaymentCancelled;