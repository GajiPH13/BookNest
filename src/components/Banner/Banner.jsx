import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/Banner.png')] mt-5 h-[60vh] relative
     max-w-7xl mx-auto w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="absolute left-28 top-28">
        <h2 className="text-5xl font-bold">Find Your Next Read</h2>
      </div>

      <div className="absolute bottom-30 left-27">
        <Link href="/all-books">
          <Button>Browse Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;