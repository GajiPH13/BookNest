import Banner from "@/components/Banner/Banner";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <FeaturedBooks />
    </div>
  );
}
