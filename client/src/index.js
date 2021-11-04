import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Restaurant from "./components/Restaurant";
import reportWebVitals from "./reportWebVitals";
//importing react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  // wrapping App in the browser router, setting up routes and route paths using nested routes
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <Routes>
  //       <Route path="/" element={<App />}>
  //         <Route path="restaurant" element={<Restaurant />}>
  //           <Route path=":id" element={<Restaurant />} />
  //         </Route>
  //       </Route>
  //     </Routes>
  //     {/* Original prior to setting up the routes ---- <App /> */}
  //   </React.StrictMode>
  // </BrowserRouter>,
  <React.StrictMode>
    <App />
    {/* Original prior to setting up the routes ---- <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
