import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found", token);
      navigate("/login");
    } else {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="relative p-2 text-gray-900 bg-neutral-100 rounded-lg shadow-lg font-medium capitalize">
      {/* Menu toggle button for small screens */}
      <button
        className="block lg:hidden px-4 py-2 text-neutral-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full max-h-[calc(100vh-56px)] overflow-y-auto bg-neutral-100 rounded-lg shadow-lg p-2 z-50">
          <button
            className="block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            onClick={() => navigate("/clientsmaps")}
          >
            Mapa Clientes
          </button>
          <button
            className="block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            onClick={() => navigate("/heatmap")}
          >
            Mapa de Calor
          </button>
          <button
            className="block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            onClick={() => navigate("/clienttable")}
          >
            Tabla Clientes
          </button>
          <button
            className="block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            title="logout"
            onClick={handleLogout}
            disabled={location.pathname === "/login"}
          >
            Logout
          </button>
        </div>
      )}

      {/* Desktop menu */}
      <div className="hidden lg:flex lg:space-x-4">
        <button
          className="inline-block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          onClick={() => navigate("/clientsmaps")}
        >
          Mapa Clientes
        </button>
        <button
          className="inline-block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          onClick={() => navigate("/heatmap")}
        >
          Mapa de Calor
        </button>
        <button
          className="inline-block rounded bg-neutral-100 px-4 py-2 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          onClick={() => navigate("/clienttable")}
        >
          Tabla Clientes
        </button>
        <div className="relative flex-auto">
          <button
            className="float-right"
            title="logout"
            onClick={handleLogout}
            disabled={location.pathname === "/login"}
          >
            <ArrowLeftStartOnRectangleIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
