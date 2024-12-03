"use client"

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './map.module.css';

const GoogleMapComponent = () => {
  const location = { lat: -5.427536, lng: 105.251626 };
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "8px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="map-container">
      <h2 className="map-title">Lokasi Campang Raya</h2>
      <LoadScript googleMapsApiKey="AIzaSyBgFxB28zKxTJi5vN75eKT3gfxkVdfx0TA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
