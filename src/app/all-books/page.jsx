import BookCard from "@/components/BooksCard/BooksCard";
import Category from "@/components/Category/Category";
import CategorySearch from "@/components/CategorySearch/CategorySearch";

import Link from "next/link";
import React from "react";
import { GiArchiveResearch } from "react-icons/gi";

export const metadata = {
  title: "All Books",
  description: "Online Bookstore",
};

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch(
    "https://book-nest-self.vercel.app/books.json",
  );
  const books = await res.json();
  // console.log(photos);
  const filteredBooks = category
    ? books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase(),
      )
    : books;
  return (
    // <div>
    //   <div className="grid grid-cols-4 mt-5 items-center">
    //     <div className="col-span-1">
    //       <Link href={"/all-books"}>
    //         <h1>All Photos</h1>
    //       </Link>
    //     </div>
    //     <div className="col-span-3 ">
    //       <div style={{ position: "relative" }} >
    //         <GiArchiveResearch
    //           style={{
    //             position: "absolute",
    //             left: "10px",
    //             top: "50%",
    //             transform: "translateY(-50%)",
    //           }}
    //         />
    //         {/* <input
    //           type="text"
    //           placeholder="Search for Available Photos"
    //           style={{ paddingLeft: "30px" }}
    //           className="w-full py-4 rounded-lg border border-zinc-200"
    //         /> */}
    //         <CategorySearch></CategorySearch>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-4 gap-4">
    //     <div className="col-span-1">
    //       <Category></Category>
    //     </div>
    //     <div className="grid grid-cols-3 col-span-3">
    //       {filteredBooks.map((book) => (
    //         <BookCard key={book.id} book={book}></BookCard>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto px-4">
  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-4 mt-5 items-center gap-4">
    
    <div className="md:col-span-1">
      <Link href="/all-books">
        <button className=" w-full py-4 rounded-lg border border-zinc-200 text-lg sm:text-xl font-semibold">
          
          All Books
        
        </button>
      </Link>
    </div>

    <div className="md:col-span-3">
      <div className="relative">
        <GiArchiveResearch
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        
        {/* Search */}
        <CategorySearch />
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
    
    {/* Sidebar */}
    <div className="md:col-span-1">
      <Category />
    </div>

    {/* Books Grid */}
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>

  </div>
</div>
  );
};

export default AllPhotoPage;
