import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToLocalStorage } from '../../utility/addToLocalStorage';
import Swal from 'sweetalert2';

const BookDetails = () => {

    const {id} = useParams();
    const clickedBookId = parseInt(id);

    const bookData = useLoaderData();

    const clickedBook = bookData.find(book => book.bookId === clickedBookId);

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = clickedBook;

    const showAlert = (title, text, iconColor = 'success') => {
        Swal.fire({
            title,
            text,
            icon: iconColor === 'green' ? 'success' : 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: 'green'
        });
    };

    const handleMarkAsRead = (id) => {
        const existing = JSON.parse(localStorage.getItem("readBookList")) || [];
        if (existing.includes(id)) {
            showAlert('Already Marked!', `"${bookName}" is already marked as read.`, 'red');
        } else {
            addToLocalStorage("readBookList", id);
            showAlert('Marked as Read!', `"${bookName}" has been added to your Read list.`, 'green');
        }
    };
    
    const handleAddToWishlist = (id) => {
        const existing = JSON.parse(localStorage.getItem("wishlistBookList")) || [];
        if (existing.includes(id)) {
            showAlert('Already in Wishlist!', `"${bookName}" is already in your wishlist.`, 'red');
        } else {
            addToLocalStorage("wishlistBookList", id);
            showAlert('Added to Wishlist!', `"${bookName}" has been added to your Wishlist.`, 'green');
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center my-10'>
            <div className='bg-gray-100 rounded-xl shadow-sm p-20 h-full flex justify-center items-center'>
                <img className='h-100' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-3 mx-10 md:mx-auto mt-5 md:mt-0'>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <h4 className='text-gray-700 font-semibold'>By : {author}</h4>
                <h4 className='border-y border-gray-300 text-gray-700 font-semibold py-2'>{category}</h4>
                <p className='font-bold'>Review : <span className='text-gray-600 font-medium'>{review}</span></p>
                <div className='flex gap-3 border-b border-gray-300 pb-4'>
                    <h4 className='font-bold'>Tag</h4>
                    {
                        tags.map(tag => <div className='badge bg-gray-100 text-green-400 font-semibold p-3'>{tag}</div>)
                    }
                </div>
                <h4 className='text-gray-600 font-semibold'>Number of Pages: <span className='text-black font-bold'>{totalPages}</span></h4>
                <h4 className='text-gray-600 font-semibold'>Publisher: <span className='text-black font-bold'>{publisher}</span></h4>
                <h4 className='text-gray-600 font-semibold'>Year of Publishing: <span className='text-black font-bold'>{yearOfPublishing}</span></h4>
                <h4 className='text-gray-600 font-semibold'>Rating: <span className='text-black font-bold'>{rating}</span></h4>
                <div className='flex gap-3'>
                    <button onClick={() => handleMarkAsRead(clickedBookId)} className='btn bg-white border-gray-600'>Mark as Read</button>
                    <button onClick={() => handleAddToWishlist(clickedBookId)} className='btn bg-green-400 text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;