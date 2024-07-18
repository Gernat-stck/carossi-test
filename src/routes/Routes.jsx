import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../pages/Login";
import Header from "../components/Header";
import ClientsMaps from "../pages/ClientsMaps";
import "../styles/App.css";
import ClientsTable from "../pages/ClientsTable";
import HeatMapClients from "../pages/HeatMapClients";

function ProtectedComponent({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? children : null;
}

ProtectedComponent.propTypes = {
  children: PropTypes.node,
};

function RoutesComp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <Header />
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar (hidden on small screens) */}
          <aside
            className={`lg:block bg-gray-800 text-white p-4 lg:w-1/4 lg:flex-shrink-0 ${isSidebarOpen ? "block" : "hidden"} lg:hidden`}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedComponent>
                    <Login />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/clientsmaps"
                element={
                  <ProtectedComponent>
                    <ClientsMaps />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/clienttable"
                element={
                  <ProtectedComponent>
                    <ClientsTable />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/heatmap"
                element={
                  <ProtectedComponent>
                    <HeatMapClients />
                  </ProtectedComponent>
                }
              />
            </Routes>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedComponent>
                    <Login />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/clientsmaps"
                element={
                  <ProtectedComponent>
                    <ClientsMaps />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/clienttable"
                element={
                  <ProtectedComponent>
                    <ClientsTable />
                  </ProtectedComponent>
                }
              />
              <Route
                path="/heatmap"
                element={
                  <ProtectedComponent>
                    <HeatMapClients />
                  </ProtectedComponent>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default RoutesComp;
