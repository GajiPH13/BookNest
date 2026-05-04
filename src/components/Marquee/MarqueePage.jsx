import React from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
const MarqueePage = () => {
    return (
        <div className="flex justify-between gap-4 items-center
         bg-white shadow-2xl py-4 px-2 max-w-7xl mx-auto my-10">
             <Link href="/all-books"><h2  className="btn  bg-[#386feb] text-white">New Arrival</h2></Link>
           <Marquee gradient={false} pauseOnHover={true}>
            
             New Arrival: Rich Dad Poor Dad | Special Discount on Memberships...
           </Marquee>
        </div>
    );
};

export default MarqueePage;