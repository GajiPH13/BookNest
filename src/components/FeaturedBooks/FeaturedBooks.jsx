import BookCard from "../BooksCard/BooksCard";


const FeaturedBooks = async () => {
  const res = await fetch(
    "https://book-nest-self.vercel.app/books.json",
  );
  const data = await res.json();
  // console.log(data);
  const topBooks = data.slice(0, 4);
  // console.log(topPhotos);
  return (
    <div className='max-w-7xl h-auto  p-4 mt-4 rounded-lg'>
      <h1 className="mt-5">Featured Books</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* {
            topBooks.map((book) =><div key={book.id}>{book.title}</div>
        )} */}
        {topBooks.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
