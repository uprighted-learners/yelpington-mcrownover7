import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
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
