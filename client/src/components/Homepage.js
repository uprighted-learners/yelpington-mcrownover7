import "../App.css";
import { useState, useEffect } from "react";
import Map from "./Map";
import { map } from "leaflet";

import { Link, Outlet } from "react-router-dom";

//attempt to globally declare tempArray to make it persist
let tempArray = [];

function App() {
  const [center, setCenter] = useState([40.45025, -79.96231]);
  const [restaurantDir, setRestaurantDir] = useState([]);

  const [markerLocations, setMarkerLocations] = useState([]);
  const [markerKey, setMarkerKey] = useState([]);
  const [markerFull, setMarkerFull] = useState([]);

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
          tempName = restArray.name;
          tempLat = restArray.latitude;
          tempLon = restArray.longitude;
          console.log(restArray.name);

          tempArray.push([tempName, tempLat, tempLon]);
        });
      // setMarkerLocations(markerLocations.push([tempLat, tempLon]));
      // setMarkerKey(markerKey.push(tempName));
    });
    setMarkerFull(tempArray);
  }, [restaurantDir]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(markerFull);
  };

  return (
    <div className="main-wrapper">
      <div className="heading">
        <h1>Yelpsburgh</h1>
      </div>
      <div className="map-nav-area">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/restaurant">Restaurant</Link>
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
    </div>
  );
}

export default App;
