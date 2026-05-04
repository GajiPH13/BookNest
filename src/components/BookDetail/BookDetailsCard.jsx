"use client";
import { Chip } from "@heroui/react";
import { div } from "framer-motion/client";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const BookDetailsCard = ({ book }) => {
  const notify = () => toast.success("Book Added to Cart");
  return (
    <div className="bg-base-200 p-3 rounded-xl">
      <div className="card lg:card-side bg-[#F6F8FE] shadow-sm p-4 rounded-lg">
      {/* <Image src={book?.image_url} alt="Album" width={400} height={500} /> */}
      <div className="relative rounded-lg">
        <Image
        src={book?.image_url || "/placeholder.jpg"}
        alt={book?.title || "Book cover"}
        width={400}
        height={500}
        className="rounded-lg object-cover shadow-md"
        priority={false}
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <Chip className='absolute top-2 right-2'>{book?.category}</Chip>
      </div>

      <div className="card-body">
        <h2 className="card-title">{book?.title}</h2>
        <p className="font-semibold">{book?.author}</p>
        <p>{book?.description}</p>
        <p className="font-semibold">{book?.available_quantity} Copies Available</p>
        <div className="card-actions justify-end">
          <button onClick={notify} className="btn bg-[#d0ddfd]">
            Borrow this Book
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default BookDetailsCard;
