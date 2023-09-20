import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./private";
import { Dashboard } from "pages/dashboard";
import { PublicRoute } from "./public";
import { Login } from "pages/login";
import { Chat } from "pages/chat";
import { Projects } from "pages/projects";
import { SingleProject } from "pages/projects/SingleProject";

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
          path="/projects"
          element={
            <PrivateRoutes>
              <Projects />
            </PrivateRoutes>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PrivateRoutes>
              <SingleProject />
            </PrivateRoutes>
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoutes>
              <Chat />
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
