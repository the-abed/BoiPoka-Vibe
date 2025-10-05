import { Suspense } from "react";
import BookCard from "./BookCard";

const Books = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Suspense>
          {
            data.map((book) => <BookCard key={book.bookId} book={book}></BookCard>)
          }
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
