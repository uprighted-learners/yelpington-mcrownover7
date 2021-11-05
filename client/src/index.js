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
  //OG Just the App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//DO THIS IN APP.JS AND MAKE CURRENT APP.JS INTO A HOMEPAGE COMPONENT
// export default function Index() {
//   return (
//     <>
//       <React.StrictMode>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<App />} />
//               <Route path="/restaurant" element={<Restaurant />}>
//                 <Route path=":id" element={<Restaurant />} />
//               </Route>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </React.StrictMode>
//     </>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
