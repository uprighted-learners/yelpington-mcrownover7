import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import L from 'leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function Map(props) {
  // const [markerLocations, setMarkerLocations] = useState([]);
  // const [markerKey, setMarkerKey] = useState([]);
  // const [restaurantName, setRestaurantName] = useState("");
  // const [restaurantLat, setRestaurantLat] = useState("");
  // const [restaurantLon, setRestaurantLon] = useState("");

  // useEffect(() => {
  //   let tempName;
  //   let tempLat;
  //   let tempLon;
  //   props.restaurantDir.forEach((element) => {
  //     fetch(`/api/${element}`)
  //       .then((res) => res.json())
  //       .then((restArray) => {
  //         tempName = restArray.name;
  //         tempLat = restArray.latitude;
  //         tempLon = restArray.longitude;
  //         console.log(restArray.name);
  //         props.markerKey.push(tempName);
  //         props.markerLocations.push([tempLat, tempLon]);
  //         props.markerFull.push([tempName, tempLat, tempLon])
  //       });
  //   });
  // }, [props.restaurantDir]);

  // if (props.markerFull === []) {
  //   return (
  //     <MapContainer
  //       center={props.center}
  //       zoom={13}
  //       style={{ height: "600px", width: "600px" }}
  //     >
  //       <TileLayer
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       />
  //     </MapContainer>
  //   );
  // } else {  
  //   return (
  //   <MapContainer
  //     center={props.center}
  //     zoom={13}
  //     style={{ height: "600px", width: "600px" }}
  //   >
  //     <TileLayer
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     />

  //     {(props.markerFull.map((element) => {
  //     // <Marker icon={DefaultIcon} key={element[0]} position={L.latLng([element[1], element[2]])} />}))} }
  //      <Marker name={props.markerFull[0][0]} position={[props.markerFull[0][1], props.markerFull[0][2]]} />}))}
  //   </MapContainer>
  // );}

//   if (props.markerFull === []) {
//   return null
// } else {
//   props.markerFull.forEach((element) => {
//     L.marker([element[1], element[2]]).addTo(Map)
//   })
// }

// useEffect(() => {
//   let tempName;
//   let tempLat;
//   let tempLon;
//   let tempArray= []
//   props.restaurantDir.forEach((element) => {
//     fetch(`/api/${element}`)
//       .then((res) => res.json())
//       .then((restArray) => {
//         // setRestaurantName(restArray.name);
//         // setRestaurantLat(restArray.latitude);
//         // setRestaurantLon(restArray.longitude);
//         tempName = restArray.name;
//         tempLat = restArray.latitude;
//         tempLon = restArray.longitude;
//         console.log(restArray.name);
//         // markerKey.push(tempName);
//         // markerLocations.push([tempLat, tempLon]);
//         tempArray.push([tempName, tempLat, tempLon])
//       });
//     // setMarkerLocations(markerLocations.push([tempLat, tempLon]));
//     // setMarkerKey(markerKey.push(tempName));
    
//   });
//   props.setMarkerFull(tempArray)
// }, [props.restaurantDir]);

console.log(props.markerFull)
  
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
      {props.markerFull.length ? (props.markerFull.map((element, index) => {
      return (<Marker key={index} name={element[0]} position={[element[1], element[2]]} />)})) : null }
    </MapContainer>
  );
}

export default Map;

//conditionally render the marker only if the page has fully loaded and the fetch are done.
//NOTE: bug with react leaflet markers do not persist. If running on 3000 and a change is made in map.js the markers will display until the page is refreshed.