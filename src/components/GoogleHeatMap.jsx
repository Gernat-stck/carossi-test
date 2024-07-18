import React from "react";
import { Marker, APIProvider, Map } from "@vis.gl/react-google-maps";

const PoiMarkers = ({ pins }) => {
  return (
    <>
      {pins.map((pin) => (
        <Marker
          key={pin.name}
          position={{ lat: pin.lat, lng: pin.lng }}
          title={pin.name}
        ></Marker>
      ))}
    </>
  );
};
export default function GoogleMapWithMarkers({ markers }) {
  return (
    <APIProvider apiKey={"AIzaSyBjyM0CyjiksJbMk4SVzZTz-Uzn5QusoRE"}>
      <Map defaultZoom={6} defaultCenter={{ lat: 13.705243, lng: -89.24231 }}>
        <PoiMarkers pins={markers} />
      </Map>
    </APIProvider>
  );
}
