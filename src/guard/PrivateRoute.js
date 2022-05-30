import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../context/AuthContext";

export default function PrivateRoute() {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  return auth.data ? <Outlet /> : <Navigate to="/login" />;
}
