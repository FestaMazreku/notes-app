import React from "react";
import Home from "./components/Home";
import NoteList from "./components/NoteList";

interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/:id",
    element: <Home />,
    title: "HomeCategory",
  },
  {
    path: "/category-notes/:id",
    element: <NoteList />,
    title: "NoteList",
  },
];



export default pagesData;
