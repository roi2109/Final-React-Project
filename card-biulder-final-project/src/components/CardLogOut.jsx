import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const CardLogOut = () => {
  const { signOut: logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logOut();
    navigate("/");
  }, []);

  return null;
};

export default CardLogOut;
