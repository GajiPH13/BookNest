"use client";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const BookDetailsCard = ({ book }) => {
    const notify = () => toast.success("Book Added to Cart");
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      
        <Image src={book?.image_url} alt="Album" width={400} height={500} />
      
      <div className="card-body">
        <h2 className="card-title">{book?.title}</h2>
        <p>{book?.author}</p>
        <p>{book?.description}</p>
        <div className="card-actions justify-end">
          <button onClick={notify} className="btn bg-[#d0ddfd]">Brow Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetailsCard;
