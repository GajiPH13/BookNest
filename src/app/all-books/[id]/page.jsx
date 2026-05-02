

import BookDetailsCard from "@/components/BookDetail/BookDetailsCard";
import { Card } from "@heroui/react";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://book-nest-self.vercel.app/books.json`,
  );
  const books = await res.json();
  // console.log(photos);

  const book = books.find((book) => book.id === parseInt(id));
//   console.log(photo);
  return (
    <div className="max-w-7xl ">
      <h1>Book Details</h1>
      
        <div className="flex items-center">
          <BookDetailsCard book={book}></BookDetailsCard>
        </div>
      
    </div>
  );
};

export default BookDetailsPage;
