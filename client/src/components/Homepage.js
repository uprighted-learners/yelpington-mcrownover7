import "../App.css";
import { useState, useEffect } from "react";
import Map from "./Map";
import { Link, NavLink } from "react-router-dom";

//declaring the tempArray for the fetch at the global level
let tempArray = [];

function Homepage() {
  //declaring global state variables
  const [center, setCenter] = useState([40.45025, -79.96231]);
  const [restaurantDir, setRestaurantDir] = useState([]);

  //declaring state variables for map markers
  const [markerFull, setMarkerFull] = useState([]);

  //fetch for /api to return a directory of the restaurant ids to be used for fetching from restaurant specific json files
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((restDirArray) => {
        setRestaurantDir(restDirArray);
      });
  }, []);

  //fetch for each specific restaurant json file by utilizing the restaurant directory state variable created above
  useEffect(() => {
    //declaring temp variables for assignments within the fetch request
    let tempName;
    let tempId;
    let tempLat;
    let tempLon;
    //fetch request wrapped in a for each loop over the restaurant directory list
    restaurantDir.forEach((element) => {
      fetch(`/api/${element}`)
        .then((res) => res.json())
        .then((restArray) => {
          //setting the temp variables to the applicable parts of the generated arrays
          tempName = restArray.name;
          tempId = restArray.id;
          tempLat = restArray.latitude;
          tempLon = restArray.longitude;
          console.log(restArray.name);

          //pushing to the global tempArray
          tempArray.push([tempName, tempLat, tempLon, tempId]);
        });
    });
    //setting the marker state variable to the tempArray that is generated on each pass through of the forEach
    setMarkerFull(tempArray);
    //setting the useEffect to only run when the directory list is fetched initially on page load
  }, [restaurantDir]);

  //setting up the return
  return (
    <div className="main-wrapper">
      <div className="heading">
        <div id="yelp-title">
          <h1>Yelpsburgh</h1>
        </div>
      </div>
      <div className="map-nav-area">
        {/* creating a navbar with the restaurant list and linking using react-router to the appropriate page */}
        <nav className="homepage-nav">
          <div className="nav-link">
            <NavLink to="/restaurant/apteka" className='nav-clickable'>Apteka</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/casa-brasil">Casa Brasil</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/dish-osteria-bar">Dish Osteria Bar</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/gaucho-parrilla-argentina">
              Gaucho Parrilla Argentina
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/grist-house-craft-brewery">
              Grist House Craft Brewery
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/hitchhiker-brewing">Hitchhiker Brewing</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/noodlehead">Noodlehead</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/penn-brewery">Penn Brewery</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/point-brugge-cafe">Point Brugge Cafe</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/the-commoner">The Commoner</NavLink>
          </div>
        </nav>
        {/* calling Map component and passing the applicable state variables */}
        <Map
          center={center}
          setCenter={setCenter}
          restaurantDir={restaurantDir}
          markerFull={markerFull}
          setMarkerFull={setMarkerFull}
        />{" "}
      </div>
    </div>
  );
}

export default Homepage;
