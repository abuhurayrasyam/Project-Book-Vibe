import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {

    return (
        <div className='my-15'>
            <h1 className='text-center text-3xl font-bold'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 my-8'>
                    {
                        booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;