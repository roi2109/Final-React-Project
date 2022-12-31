import React from "react";
import { getUser } from "../services/httpService";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const user = getUser();

  if (!user || !user.biz) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoutes;
