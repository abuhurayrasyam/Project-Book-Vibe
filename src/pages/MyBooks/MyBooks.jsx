import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utility/addToLocalStorage';
import ReadBooks from '../ReadBooks/ReadBooks';


const MyBooks = () => {

    const [readList, setReadList] = useState([]);

    const booksData = useLoaderData();
    
    useEffect(() => {
        const storedBookDataString = getFromLocalStorage();
        const storedBookData = storedBookDataString.map(id => parseInt(id));
        const currentReadList = booksData.filter(books => storedBookData.includes(books.bookId));
        setReadList(currentReadList);
    }, []);

    return (
        <div>
            <div className='bg-gray-100 rounded-xl w-full p-8 my-5'>
                <h1 className='text-4xl font-bold text-center'>My Books</h1>
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