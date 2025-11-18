import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";
import Loader from "../Loader/Loader";

const PrivetRoute = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRoute;
