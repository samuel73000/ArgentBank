import "../Styles/index.css";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthData, setIsLoggedIn } from "../Slice/authSlice";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Utilisation de useSelector pour extraire isLoggedIn du state
  const dispatch = useDispatch();


  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      dispatch(setIsLoggedIn(true));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false)); // Mettez à jour l'état de connexion lors de la déconnexion
    dispatch(clearAuthData());
    document.location.href = "http://localhost:3000";
    localStorage.removeItem('authToken');
  };

  const handleLogin = () => {
    dispatch(setIsLoggedIn(true));
    document.location.href = "http://localhost:3000/Sign-in";
  };

  return (
    <div>
      <nav class="main-nav">
        <NavLink to="/" className={"main-nav-logo"}>
          <img
            class="main-nav-logo-image"
            src={require("../Assets/argentBankLogo.png")}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {isLoggedIn ? (
            <button
              className={"main-nav-item"}
              onClick={handleLogout}
              type="button"
            >
              <i class="fa fa-user-circle"></i>
              <span>Sign-Out</span>
            </button>
          ) : (
            <button
              className={"main-nav-item"}
              onClick={handleLogin}
              type="button"
            >
              <i class="fa fa-user-circle"></i>
              <span>Sign-In</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Header;
