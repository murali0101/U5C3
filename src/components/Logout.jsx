import { useContext, useEffect } from "react";

import { TempContext } from "./TempContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const { isAuth, toggleAuth } = useContext(TempContext);
  const nav2 = useNavigate();
  return (
    <div className="logout">
      <button
        className="logout-btn"
        onClick={() => {
          toggleAuth();
          nav2("/");
        }}
      >
        LogOut
      </button>
    </div>
  );
};
