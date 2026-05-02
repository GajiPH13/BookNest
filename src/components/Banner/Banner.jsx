import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    // <div className="bg-[url('/Banner.png')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-6">
    //   {/* Overlay */}
    //   <div className="w-full h-full rounded-lg  flex items-center ">
    //     <div className="  px-30 space-y-4 ">
    //       <p className="text-5xl text-black  font-bold  ">
    //         Find Your Next Read
    //       </p>
    //       <p className="text-5xl text-[#386fec]  font-bold  ">
    //         Your One-Stop Destination
    //       </p>

    //       <p className="text-lg md:text-md mb-6 max-w-xl text-[#4a5b7d]">
    //         Explore thousands of books, eBooks, and resources
    //         <br />
    //         anytime anywhere.
    //       </p>

    //       <div className="flex gap-4">
    //         <Link href="/all-books">
    //           <Button className=" bg-blue-500 text-white hover:bg-[#83a6fd]">
    //             Browse Now
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className="
    bg-[url('/Banner.png')] 
    w-full 
    min-h-[50vh] sm:min-h-[60vh]
    
    bg-contain sm:bg-cover
    bg-center bg-no-repeat
    
    flex items-center 
    rounded-lg shadow-2xl mt-6
  "
    >
      {/* Overlay */}
      <div className="w-full h-full rounded-lg flex items-center">
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-30 space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold">
            Find Your Next Read
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#386fec] font-bold">
            Your One-Stop Destination
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl text-[#4a5b7d]">
            Explore thousands of books, eBooks, and resources
            <br />
            anytime anywhere.
          </p>

          <div className="flex gap-4">
            <Link href="/all-books">
              <Button className="bg-blue-500 text-white hover:bg-[#83a6fd]">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
