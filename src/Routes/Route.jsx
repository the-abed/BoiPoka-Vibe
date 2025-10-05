import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import About from "../pages/About";
import ReadList from "../pages/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
   
    children: [
      {
        index: true, // ✅ this makes Home render at "/"
        element: <Home />,
        loader: async () => {
          const res = await fetch("booksData.json");
          if (!res.ok) throw new Error("Failed to load books");
          return res.json(); // array of books
        },
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "readList",
        Component: ReadList,
         loader: async () => {
          const res = await fetch("booksData.json");
          if (!res.ok) throw new Error("Failed to load books");
          return res.json(); // array of books
        },
      },
      {
        path: "bookDetails/:id", // ✅ no leading slash for nested routes
        Component: BookDetails,
        loader: async () => {
          const res = await fetch("booksData.json");
          if (!res.ok) throw new Error("Failed to load books");
          return res.json(); // array of books
        },
      },
    ],
  },
]);
