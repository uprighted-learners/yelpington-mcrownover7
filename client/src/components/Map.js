import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
      {/* using a ternary to set up all applicable markers based on the passed in marker variable. mapping over the array to set up each pop up */}
      {props.markerFull.length
        ? props.markerFull.map((element, index) => {
            let restPopLink = element[3];
            return (
              <Marker
                key={index}
                name={element[0]}
                position={[element[1], element[2]]}
              >
                {/* the pop up links to the restaurants page */}
                <Popup>
                  <a href={`/restaurant/${restPopLink}`}>{element[0]}</a>
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
}

export default Map;

//NOTE: bug with react leaflet markers do not persist. If running on 3000 and a change is made in map.js the markers will display until the page is refreshed.