 import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "../../assets/image/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

type Props = {
  coordinates?: any;
};

const Map = ({ coordinates }: Props) => {
  const marker = L.icon({
    iconUrl: markerIcon,
    iconSize: [48, 48], // Set the size of the icon
    iconAnchor: [24, 48], // Set the anchor point of the icon
  });
  let state = {
    keyMAP: Math.random(),
  };

  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinates.location.lat, coordinates.location.lng]}
      zoom={10}
      scrollWheelZoom={true}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker
        position={[coordinates.location.lat, coordinates.location.lng]}
        icon={marker}
      />
    </MapContainer>
  );
};

export default Map;
