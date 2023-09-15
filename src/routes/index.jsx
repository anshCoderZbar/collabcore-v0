import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./private";
import { Dashboard } from "pages/dashboard";
import { PublicRoute } from "./public";
import { Login } from "pages/login";

export const AllRoutes = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted={props?.auth}>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
