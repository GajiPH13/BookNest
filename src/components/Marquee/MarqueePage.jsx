import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueePage = () => {
    return (
        <div className="flex justify-between gap-4 items-center
         bg-white shadow-2xl py-4 px-2 max-w-7xl mx-auto my-10">
             <h2 className="btn bg-[#386feb] text-white">New Arival</h2>
           <Marquee gradient={false} pauseOnHover={true}>
            
             New Arival: New tech innovation announced | Special Discount on Memberships...
           </Marquee>
        </div>
    );
};

export default MarqueePage;