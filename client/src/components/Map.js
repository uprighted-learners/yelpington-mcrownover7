import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useState } from "react";

function Map(props) {
  // const [markerLocations, setMarkerLocations] = useState([]);
  // const [markerKey, setMarkerKey] = useState([]);
  // const [restaurantName, setRestaurantName] = useState("");
  // const [restaurantLat, setRestaurantLat] = useState("");
  // const [restaurantLon, setRestaurantLon] = useState("");

  useEffect(() => {
    let tempName;
    let tempLat;
    let tempLon;
    props.restaurantDir.forEach((element) => {
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
          props.markerKey.push(tempName);
          props.markerLocations.push([tempLat, tempLon]);
        });
      // setMarkerLocations(markerLocations.push([tempLat, tempLon]));
      // setMarkerKey(markerKey.push(tempName));
    });
  }, [props.restaurantDir]);

  return (
    <MapContainer
      center={props.center}
      zoom={13}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker key={props.markerKey[0]} position={props.markerLocations[0]} /> */}
    </MapContainer>
  );
}

export default Map;
