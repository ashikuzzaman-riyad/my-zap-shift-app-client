import React from "react";
const support = [
  {
    id: 1,
    img:'https://i.ibb.co.com/PvDK6YQw/live-tracking.png',
    title: "Live Parcel Tracking",
    deprecation:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  
  
  {
    id: 2,
    title: "100% Safe Delivery",
    img: 'https://i.ibb.co.com/ccW17VS1/safe-delivery.png',
    deprecation:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  
  
  {
    id: 3,
    title:"24/7 Call Center Support",
    img:'https://i.ibb.co.com/ccW17VS1/safe-delivery.png',
    deprecation:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
  
];

import Support from "./Support";

const SupportService = () => {
    console.log(support)
    return (
        <div className="border-t border-dashed  mx-20">
            <div className="flex flex-col gap-10 my-20" >
                {
                    support.map(data => <Support key={data.id} data={data}></Support>)
                }
            </div>
        </div>
    );
};

export default SupportService;
