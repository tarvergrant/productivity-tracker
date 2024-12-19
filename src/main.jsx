import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./login/Login.jsx";
import Register from "./register/Register.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<App />} />

      {/* Catch-All Route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
