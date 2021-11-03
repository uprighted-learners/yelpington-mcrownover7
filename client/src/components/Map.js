import { MapContainer, TileLayer} from "react-leaflet";


function Map(props) {

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
    </MapContainer>
  );
}

export default Map;