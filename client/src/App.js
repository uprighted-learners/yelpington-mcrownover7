import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([40.4406, -79.9959]);

  useEffect(() => {
    fetch("");
  });
  return (
    <div>
      <h1>Yelpington</h1>
      <Map center={center} setCenter={setCenter} />{" "}
    </div>
  );
}

export default App;
