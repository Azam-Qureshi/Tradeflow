import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/verify", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Authenticated:", res.data);
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log("Not authenticated:", err.response?.data);
        setAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Checking authentication...</h2>;
  }

  if (!authenticated) {
    window.location.href = "http://localhost:5173";
    return null;
  }

  return children;
};

export default ProtectedRoute;