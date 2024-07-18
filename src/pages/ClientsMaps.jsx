import React from "react";
import MapMarkersLoader from "../components/MapMarkersLoader";
import GoogleMapWithMarkers from "../components/GoogleMapWithMarkers";

const ClientsMaps =  () => {
  return (
    <MapMarkersLoader>
      {(markers) => <GoogleMapWithMarkers markers={markers} />}
    </MapMarkersLoader>
  );
};

export default ClientsMaps;
