import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF as Marker } from "@react-google-maps/api";
import { CENTER } from ".";

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={CENTER}
        zoom={10}
      >
        <Marker position={CENTER} />
      </GoogleMap>
    </LoadScript>
  );
};
