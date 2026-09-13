"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Listing } from "@/types/listing";

// Arregla el icono por defecto de Leaflet (no carga bien con bundlers)
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface ListingsMapProps {
  listings: Listing[];
}

const ListingsMap = ({ listings }: ListingsMapProps) => {
  const center: [number, number] = listings.length
    ? [listings[0].lat, listings[0].lng]
    : [41.15, 1.1];

  return (
    <MapContainer
      center={center}
      zoom={9}
      className="h-full min-h-[300px] w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listings.map((listing) => (
        <Marker key={listing.id} position={[listing.lat, listing.lng]} icon={icon}>
          <Popup>
            <strong>{listing.title}</strong>
            <br />
            {listing.pricePerNight} € noche
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ListingsMap;