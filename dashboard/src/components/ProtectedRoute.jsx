import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("https://tradeflow-7egr.onrender.com/verify", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Authenticated:", res.data);
        setAuthenticated(true);
      })
      .catch((err) => {
         console.log("VERIFY ERROR:", err);
  console.log("STATUS:", err.response?.status);
  console.log("DATA:", err.response?.data);
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
    window.location.href = "https://tradeflow-frontend-0ma5.onrender.com";
    return null;
  }

  return children;
};

export default ProtectedRoute;