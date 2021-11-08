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
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant/apteka" element={<Restaurant />} />
          <Route path="/restaurant/casa-brasil" element={<Restaurant />} />
          <Route path="/restaurant/dish-osteria-bar" element={<Restaurant />} />
          <Route path="/restaurant/gaucho-parrilla-argentina" element={<Restaurant />} />
          <Route path="/restaurant/grist-house-craft-brewery" element={<Restaurant />} />
          <Route path="/restaurant/hitchhiker-brewing" element={<Restaurant />} />
          <Route path="/restaurant/noodlehead" element={<Restaurant />} />
          <Route path="/restaurant/penn-brewery" element={<Restaurant />} />
          <Route path="/restaurant/point-brugge-cafe" element={<Restaurant />} />
          <Route path="/restaurant/the-commoner" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// import "./App.css";
// import { useState, useEffect } from "react";
// import Map from "./components/Map";
// import { map } from "leaflet";

// import { Link, Outlet } from "react-router-dom";

// //attempt to globally declare tempArray to make it persist
// let tempArray = [];

// function App() {
//   const [center, setCenter] = useState([40.45025, -79.96231]);
//   const [restaurantDir, setRestaurantDir] = useState([]);

//   const [markerLocations, setMarkerLocations] = useState([]);
//   const [markerKey, setMarkerKey] = useState([]);
//   const [markerFull, setMarkerFull] = useState([]);

//   useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((restDirArray) => {
//         setRestaurantDir(restDirArray);
//       });
//   }, []);

//   useEffect(() => {
//     let tempName;
//     let tempLat;
//     let tempLon;
//     restaurantDir.forEach((element) => {
//       fetch(`/api/${element}`)
//         .then((res) => res.json())
//         .then((restArray) => {
//           tempName = restArray.name;
//           tempLat = restArray.latitude;
//           tempLon = restArray.longitude;
//           console.log(restArray.name);

//           tempArray.push([tempName, tempLat, tempLon]);
//         });
//       // setMarkerLocations(markerLocations.push([tempLat, tempLon]));
//       // setMarkerKey(markerKey.push(tempName));
//     });
//     setMarkerFull(tempArray);
//   }, [restaurantDir]);

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(markerFull);
//   };

//   return (
//     <div className="main-wrapper">
//       <div className="heading">
//         <h1>Yelpsburgh</h1>
//       </div>
//       <div className="map-nav-area">
//         <nav
//           style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}
//         >
//           {/* <Link to="/restaurant">Restaurant</Link> */}
//         </nav>
//         <form onSubmit={onSubmit}>
//           <input type="submit" />
//         </form>
//         {/* Outlet allows for the use of the nested routes in index.js */}
//         {/* <Outlet /> */}
//         <Map
//           center={center}
//           setCenter={setCenter}
//           restaurantDir={restaurantDir}
//           markerKey={markerKey}
//           markerLocations={markerLocations}
//           markerFull={markerFull}
//           setMarkerFull={setMarkerFull}
//         />{" "}
//       </div>
//     </div>
//   );
// }

// export default App;
