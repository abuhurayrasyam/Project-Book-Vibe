import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root
    },
  ]);