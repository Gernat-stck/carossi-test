import React, { useEffect, useState } from "react";
import cordinates from "../utils/Cordinates"; // Asegúrate de que la ruta sea correcta

const MapMarkersLoader = ({ children }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMarkers(cordinates);
     localStorage.setItem("mapMarkers", JSON.stringify(cordinates));
  }, []);

  return children(markers);
};

export default MapMarkersLoader;
