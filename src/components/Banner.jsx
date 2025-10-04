import React from 'react';
import bookImage from '../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:p-14  my-8 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf

      </h1>
      
      <button className="btn px-5 bg-[#23BE0A] text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;