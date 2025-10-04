import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home';
import BookDetails from '../components/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            loader: ()=> fetch('booksData.json'),
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/bookDetails/:id",
            Component: BookDetails
        }
    ]
  },
]);