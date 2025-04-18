import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {bookId, bookName, author, image, rating, category, tags} = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-80 border border-gray-200 shadow-md h-full">
                <figure className='bg-gray-100 p-5'>
                    <img className='h-40'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        {
                            tags.map(tag => <div className="badge bg-gray-100 text-green-400 font-semibold p-3">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title font-semibold">
                    {bookName}
                    </h2>
                    <p className='text-gray-800'>By: {author}</p>
                    <span className='border-t border-gray-400 border-dashed my-2'></span>
                    <div className="card-actions flex justify-between items-center">
                        <div>{category}</div>
                        <div className="flex items-center gap-2">{rating} <Star /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;