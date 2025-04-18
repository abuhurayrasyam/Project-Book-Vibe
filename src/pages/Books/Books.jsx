import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {

    return (
        <div className='my-5'>
            <h1 className='text-center text-3xl font-bold'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                {
                    booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;