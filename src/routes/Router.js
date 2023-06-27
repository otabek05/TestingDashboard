import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Employes from "../pages/Employes";
import Buildings from "../pages/Buildings";
import Settings from "../pages/Settings";
import RegisterForm from "../components/Forms/RegisterForm";
import LoginForm from "../components/Forms/LoginForm";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/login" element={<LoginForm/>} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employes />} />
      <Route path="/building" element={<Buildings />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default Router;
