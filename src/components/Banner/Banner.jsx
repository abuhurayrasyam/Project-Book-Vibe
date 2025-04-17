import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='bg-gray-100 grid lg:grid-cols-2 grid-cols-1 gap-4 justify-between items-center p-18 w-full'>
            <div>
                <h1 className='text-4xl font-bold mb-8'>Books to freshen up<br></br>your bookshelf</h1>
                <button className='btn bg-green-400 text-white'>View The List</button>
            </div>
            <div className='flex lg:justify-end'>
                <img className='w-100 rounded-xl' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;