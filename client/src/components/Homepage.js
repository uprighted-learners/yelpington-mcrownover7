import "../App.css";
import { useState, useEffect } from "react";
import Map from "./Map";

import { Link, Outlet } from "react-router-dom";

//attempt to globally declare tempArray to make it persist
let tempArray = [];

function Homepage() {
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
          <Link to="/restaurant/apteka">Apteka</Link>
          <Link to="/restaurant/casa-brasil">Casa Brasil</Link>
          <Link to="/restaurant/dish-osteria-bar">Dish Osteria Bar</Link>
          <Link to="/restaurant/gaucho-parrilla-argentina">Gaucho Parrilla Argentina</Link>
          <Link to="/restaurant/grist-house-craft-brewery">Grist House Craft Brewery</Link>
          <Link to="/restaurant/hitchhiker-brewing">Hitchhiker Brewing</Link>
          <Link to="/restaurant/noodlehead">Noodlehead</Link>
          <Link to="/restaurant/penn-brewery">Penn Brewery</Link>
          <Link to="/restaurant/point-brugge-cafe">Point Brugge Cafe</Link>
          <Link to="/restaurant/the-commoner">The Commoner</Link>
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

export default Homepage;
