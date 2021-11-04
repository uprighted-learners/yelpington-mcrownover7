import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { map } from "leaflet"

import { Link, Outlet } from "react-router-dom";
let tempArray= []
function App() {
  const [center, setCenter] = useState([40.4406, -79.9959]);
  const [restaurantDir, setRestaurantDir] = useState([]);

  const [markerLocations, setMarkerLocations] = useState([]);
  const [markerKey, setMarkerKey] = useState([]);
  const [markerFull, setMarkerFull] = useState([])
  // const [restaurantName, setRestaurantName] = useState("");
  // const [restaurantLat, setRestaurantLat] = useState("");
  // const [restaurantLon, setRestaurantLon] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((restDirArray) => {
        setRestaurantDir(restDirArray);
      });
  }, []);

  

  useEffect(() => {
    let tempName;
    let tempLat;
    let tempLon;
    restaurantDir.forEach((element) => {
      fetch(`/api/${element}`)
        .then((res) => res.json())
        .then((restArray) => {
          // setRestaurantName(restArray.name);
          // setRestaurantLat(restArray.latitude);
          // setRestaurantLon(restArray.longitude);
          tempName = restArray.name;
          tempLat = restArray.latitude;
          tempLon = restArray.longitude;
          console.log(restArray.name);
          // markerKey.push(tempName);
          // markerLocations.push([tempLat, tempLon]);
          tempArray.push([tempName, tempLat, tempLon])
        });
      // setMarkerLocations(markerLocations.push([tempLat, tempLon]));
      // setMarkerKey(markerKey.push(tempName));
      
    });
    setMarkerFull(tempArray)
  }, [restaurantDir]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    // console.log(markerKey);
    // console.log(markerLocations)
    console.log(markerFull)
  };

  return (
    <div>
      <h1>Yelpsburgh</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/* <Link to="/restaurant">Restaurant</Link> */}
      </nav>
      <form onSubmit={onSubmit}>
        <input type="submit" />
      </form>
      {/* Outlet allows for the use of the nested routes in index.js */}
      {/* <Outlet /> */}
      <Map
        center={center}
        setCenter={setCenter}
        restaurantDir={restaurantDir}
        markerKey={markerKey}
        markerLocations={markerLocations}
        markerFull={markerFull}
        setMarkerFull={setMarkerFull}
      />{" "}
    </div>
  );
}

export default App;
