import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utility/addToLocalStorage';
import MyBook from '../MyBook/MyBook';


const MyBooks = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');

    const booksData = useLoaderData();
    
    useEffect(() => {
        const readIds = getFromLocalStorage("readBookList").map(id => parseInt(id));
        const wishIds = getFromLocalStorage("wishlistBookList").map(id => parseInt(id));

        const currentReadList = booksData.filter(book => readIds.includes(book.bookId));
        const currentWishList = booksData.filter(book => wishIds.includes(book.bookId));

        setReadList(currentReadList);
        setWishList(currentWishList);
    }, []);

    const handleSort = (sortType) => {
        setSort(sortType);

        if(sortType === "Pages") {
            const sortedByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages);
            setWishList(sortedByPages);
        }
        if(sortType === "Ratings") {
            const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRatings);
            setWishList(sortedByRatings);
        }
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-100 rounded-xl w-full p-8 my-5'>
                    <h1 className='text-4xl font-bold text-center'>My Books</h1>
                </div>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️ {sort ? sort : ""}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-4 my-10'>
                        {
                            readList.map(book => <MyBook key={book.bookId} book={book} listType="readList"></MyBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-4 my-10'>
                        {
                            wishList.map(book => <MyBook key={book.bookId} book={book} listType="wishList"></MyBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyBooks;