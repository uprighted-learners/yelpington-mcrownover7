import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import { Link, Outlet } from "react-router-dom"

function App() {
  const [center, setCenter] = useState([40.4406, -79.9959]);

  useEffect(() => {
    fetch("");
  });
  return (
    <div>
      <h1>Yelpington</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        {/* <Link to="/restaurant">Restaurant</Link> */}
      </nav>
      {/* Outlet allows for the use of the nested routes in index.js */}
      {/* <Outlet /> */}
      <Map center={center} setCenter={setCenter} />{" "}
    </div>
  );
}

export default App;
