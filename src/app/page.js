import Banner from "@/components/Banner/Banner";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import Image from "next/image";
import SlidingBar from "@/components/SlidingBar/SlidingBar";
import FeedBack from "@/components/FeedBack/FeedBack";
export default function Home() {
  return (
    <div >
      <Banner />
      <FeaturedBooks />
      <SlidingBar />
      <FeedBack/>
    </div>
  );
}
