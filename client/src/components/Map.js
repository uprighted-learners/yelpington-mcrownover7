import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from 'leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function Map(props) {
  
  return (
    <MapContainer
      center={props.center}
      zoom={12}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.markerFull.length ? (props.markerFull.map((element, index) => {
      return (<Marker key={index} name={element[0]} position={[element[1], element[2]]}> <Popup>{element[0]}</Popup></Marker>)})) : null }
    </MapContainer>
  );
}

export default Map;

//conditionally render the marker only if the page has fully loaded and the fetch are done.
//NOTE: bug with react leaflet markers do not persist. If running on 3000 and a change is made in map.js the markers will display until the page is refreshed.
//