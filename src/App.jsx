import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=
          {
            <Home />
          } />
      </Routes>
    </>
  );
}

export default App;
