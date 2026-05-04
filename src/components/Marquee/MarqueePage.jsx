import React from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
const MarqueePage = () => {
    return (
        // <div className="flex justify-between gap-4 items-center
        //  bg-white shadow-2xl py-4 px-2 max-w-7xl mx-auto my-10">
        //      <Link href="/all-books"><h2  className="btn  bg-[#386feb] text-white">New Arrival</h2></Link>
        //    <Marquee gradient={false} pauseOnHover={true}>
            
        //      New Arrival: Rich Dad Poor Dad | Special Discount on Memberships...
        //    </Marquee>
        // </div>
        <div
  className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4
             bg-white shadow-2xl py-3 sm:py-4 px-3 sm:px-4 
             max-w-7xl  sm:mx-auto my-6 sm:my-10 rounded-xl"
>
  <Link href="/all-books">
    <h2 className="btn bg-[#386feb] text-white whitespace-nowrap text-sm sm:text-base">
      New Arrival
    </h2>
  </Link>

  <div className="w-full sm:w-auto overflow-hidden">
    <Marquee gradient={false} pauseOnHover={true}>
      <span className="text-sm sm:text-base">
        New Arrival: Rich Dad Poor Dad | Special Discount on Memberships...
      </span>
    </Marquee>
  </div>
</div>
    );
};

export default MarqueePage;