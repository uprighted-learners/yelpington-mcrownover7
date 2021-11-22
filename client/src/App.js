import React from "react";
import Homepage from "./components/Homepage";
import Restaurant from "./components/Restaurant";
//importing react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurant/:restid" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
