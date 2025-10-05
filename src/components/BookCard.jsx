import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  //   console.log(book);
  const { bookId, author, bookName, category, image, rating, tags,totalPages } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm  border-1 border-gray-200 p-4 mx-auto">
        <figure className="bg-gray-200 rounded-xl ">
          <img
            className="p-4 h-[200px] drop-shadow-neutral-400 drop-shadow-xl"
            width={150}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="flex gap-3 mt-3">
          {tags.map((tag) => (
            <p className="bg-green-50 px-2 rounded-3xl text-sm text-[#23BE0A] font-semibold">
              {tag}{" "}
            </p>
          ))}
        </div>
        <div className="card-body px-1">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p> <p>Pages: {totalPages}</p>
          <hr className="border-t-2 border-dotted border-gray-300 mt-2" />
          <div className="card-actions justify-between mt-2">
            <div className="">{category}</div>
            <div className="flex items-center gap-2">
              {rating} <CiStar className="text-lg" />{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
