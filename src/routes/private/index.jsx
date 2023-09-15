import { Layout } from "app/layout";
import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const auth = true;
  return <>{auth ? <Layout>{children}</Layout> : <Navigate to={"/login"} />}</>;
};