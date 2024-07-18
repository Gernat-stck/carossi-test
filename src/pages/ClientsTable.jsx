import React from "react";
import cordinates from "../utils/Cordinates"; // Cambia la ruta según la ubicación real del archivo

export default function ClientsTable() {
  return (
    <div className="container mx-auto px-4 min-w-screen-lg">
      <h2 className="text-2xl my-5 text-center font-semibold">
        Tabla de clientes <small className="text-sm">(Coordenadas)</small>
      </h2>
      <ul className="list-none p-0 m-0">
        <li className="flex bg-gray-400 text-xs uppercase tracking-wider rounded-lg mb-6">
          <div className="flex-1 text-center py-4 px-6">Nombre</div>
          <div className="flex-1 text-center py-4 px-6">Latitud</div>
          <div className="flex-1 text-center py-4 px-6">Longitud</div>
        </li>
        {cordinates.map((coord, index) => (
          <li key={index} className="flex bg-white shadow-md mb-6 rounded-lg">
            <div className="flex-1 text-center py-4 px-6">{coord.name}</div>
            <div className="flex-1 text-center py-4 px-6">{coord.lat}</div>
            <div className="flex-1 text-center py-4 px-6">{coord.lng}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
