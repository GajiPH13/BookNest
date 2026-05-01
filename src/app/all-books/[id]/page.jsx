import BookCard from "@/components/BooksCard/BooksCard";

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
    <div className="w-5xl">
      <h1>Book Details</h1>
      <Card>
        <BookCard book={book}></BookCard>
      </Card>
    </div>
  );
};

export default BookDetailsPage;
