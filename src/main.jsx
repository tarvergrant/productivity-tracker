import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AuthLayout from "./auth/AuthLayout.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Protected Routes */}

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
