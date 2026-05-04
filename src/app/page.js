// "use client";
import Banner from "@/components/Banner/Banner";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import Image from "next/image";
import SlidingBar from "@/components/SlidingBar/SlidingBar";
import FeedBack from "@/components/FeedBack/FeedBack";
import MarqueePage from "@/components/Marquee/MarqueePage";
// import { use, useState } from "react";
// import { useEffect } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1050);
  // })
  // if (loading) {
  //   return <div className="flex justify-center items-center h-screen">
  //     <span className="loading loading-spiner loading-lg">
        
  //     </span>

  //   </div>;
  // }
  return (
    <div >
      <Banner />
      <MarqueePage />
      <FeaturedBooks />
      <SlidingBar />
      <FeedBack/>
    </div>
  );
}
