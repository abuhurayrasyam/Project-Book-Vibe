import React from 'react';

const MyBook = ({book, listType}) => {

    const {bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    return (
        <div className='flex flex-row gap-5 border border-gray-200 rounded-xl shadow-sm p-4'>
            <div className='bg-gray-100 p-5 flex justify-center items-center w-50'>
                <img className='h-50 md:h-25' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-bold'>{bookName}</h1>
                <h4 className='text-gray-700 font-medium'>By : {author}</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex gap-1'>
                        <h4 className='font-bold'>Tag :</h4>
                        <div className='flex gap-1'>
                            {
                                tags.map(tag => <div className='badge bg-gray-100 text-green-400 font-semibold p-3'>{tag}</div>)
                            }
                        </div>
                    </div>
                    <h4 className='text-gray-600 font-medium'>Year of Publishing: {yearOfPublishing}</h4>
                </div>
                <div className='flex gap-5 text-gray-600 font-medium'>
                    <h4>Publisher: {publisher}</h4>
                    <h4>Page {totalPages}</h4>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='flex gap-3'>
                        <h4 className='bg-blue-100 text-blue-500 p-2 md:p-3 rounded-full font-medium text-[10px] md:text-sm'>Category: {category}</h4>
                        <h4 className='bg-yellow-100 text-yellow-500 p-2 md:p-3 rounded-full font-medium text-[10px]md: text-sm'>Rating: {rating}</h4>
                    </div>
                    <button className='bg-green-500 text-white py-1 px-3 rounded-full font-medium text-sm cursor-pointer'>{listType === "readList" ? "View Details" : "Read Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default MyBook;