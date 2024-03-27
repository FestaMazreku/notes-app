import React from "react";
import Home from "./components/Home";

interface routerType {
    title: string;
    path: string;
    element: JSX.Element;
}

const pagesData: routerType[] = [
    {
        path: "/",
        element: <Home />,
        title: "home",
    }
];

export default pagesData;