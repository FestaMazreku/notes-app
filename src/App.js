import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import NavbarNotes from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarNotes />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
