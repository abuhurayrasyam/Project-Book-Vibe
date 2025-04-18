import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utility/addToLocalStorage';
import ReadBooks from '../ReadBooks/ReadBooks';


const MyBooks = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const booksData = useLoaderData();
    
    useEffect(() => {
        const storedBookDataString = getFromLocalStorage();
        const storedBookData = storedBookDataString.map(id => parseInt(id));
        const currentReadList = booksData.filter(books => storedBookData.includes(books.bookId));
        setReadList(currentReadList);
    }, []);

    const handleSort = (sortType) => {
        setSort(sortType);

        if(sortType === "Pages") {
            const sortedByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages);
        }
        if(sortType === "Ratings") {
            const sortedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRatings);
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
                    {
                        readList.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
                    }
                </TabPanel>
                <TabPanel>
                    <h1>Wishlist Books</h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MyBooks;