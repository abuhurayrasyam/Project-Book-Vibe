import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import MyBooks from '../pages/MyBooks/MyBooks';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch('../booksData.json')
        },
        {
          path: "/book/:id",
          Component: BookDetails,
          loader: () => fetch('../booksData.json')
        },
        {
          path: "/my-books",
          Component: MyBooks,
          loader: () => fetch('../booksData.json')
        }
      ]
    },
  ]);