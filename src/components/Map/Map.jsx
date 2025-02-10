import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";

// Fix missing marker icon issue
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Array of 10 hotels with unique positions and meaningful names
const hotels = [
  { position: [51.505, -0.09], name: "The Grand London Hotel" },
  { position: [51.51, -0.1], name: "Riverside Suites" },
  { position: [51.515, -0.08], name: "Park View Inn" },
  { position: [51.5, -0.12], name: "Urban Oasis Hotel" },
  { position: [51.52, -0.07], name: "Skyline Retreat" },
  { position: [51.495, -0.11], name: "The Royal Stay" },
  { position: [51.525, -0.09], name: "City Lights Lodge" },
  { position: [51.505, -0.13], name: "Riverbank Resort" },
  { position: [51.515, -0.1], name: "Central Plaza Hotel" },
  { position: [51.5, -0.08], name: "Boutique Bliss" },
];

const Map = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto justify-between mt-16">
      <div className="md:w-2/3">
        <MapContainer
          className="h-[300px] z-0"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Render markers for each hotel */}
          {hotels.map((hotel, index) => (
            <Marker key={index} position={hotel.position} icon={customIcon}>
              <Popup>{hotel.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="md:w-1/4 mt-8 text-white mb-10">
        <h1 className="font-bold text-[#d3a955] text-xl md:text-3xl mt-5">
          Find Your Home Away from Home
        </h1>
        <p className="mt-3">
          Discover your perfect getaway with our interactive map. From cozy
          escapes to luxurious stays, find your home away from home wherever you
          go!
        </p>
      </div>
    </div>
  );
};

export default Map;
