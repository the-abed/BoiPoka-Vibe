import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)
 
const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { author, bookName, category, image,review
, rating, tags,totalPages
,
publisher,yearOfPublishing
 } = singleBook;
  // console.log("Data", singleBook);
  const handMarkAsRead = (id)=> {

    MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

    addToStoreDB(id);
  }
    return (
        <div className="hero min-h-screen mx-auto">
  <div className="flex flex-col gap-6 lg:flex-row ">
    <figure className=' '>
      <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </figure>
    <div>

      <div className='work-font space-y-2'>

<h1 className="text-5xl font-bold font-serif">{bookName}</h1>
      <p className="">
        By: {author}
      </p>
       <hr className="border-t-2 border-dotted border-gray-300 mt-2" />
       <p>{category} </p>
        <hr className="border-t-2 border-dotted border-gray-300 mt-2" />
        <p><h4 className='font-bold '>Review:</h4> {review} </p>
        <div className="flex gap-3 mt-3">
          <h4 className='font-bold'>Tag:</h4>
          {tags.map((tag) => (
            <p className="bg-green-50 px-2 rounded-3xl text-sm text-[#23BE0A] font-semibold">
              {tag}{" "}
            </p>
          ))}
        </div>
        <hr className="border-t-2 border-dotted border-gray-300 mt-2" />
        <p className='text-gray-500 flex gap-24 '>Number of Pages:<span>{totalPages}</span> </p>
        <p className='text-gray-500 flex gap-30'>Publisher:<span >{publisher} </span></p>
        <p className='text-gray-500 flex gap-21'>Year of Publishing: <span>{yearOfPublishing}</span> </p>
        <p className='text-gray-500 flex gap-44'>Ratings: <span>{rating}</span></p>

      <div className='flex gap-4'>
        <button onClick={() => handMarkAsRead(id)} className="btn mt-5 hover:bg-green-700 hover:scale-110 hover:text-white">Mark as Read</button>
      <button className="btn bg-[#50B1C9] mt-5 text-white hover:bg-green-700 hover:scale-110">Add To Wishlist</button>
      </div>

      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;