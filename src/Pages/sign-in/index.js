import "../../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthToken,
  setLoginMessage,
  setIsLoggedIn,
  setRememberMe,
} from "../../Slice/authSlice";
import ModalSignUp from "../../Components/ModalSignUp";
import { openModal, closeModal  } from "../../Slice/modalSignUpSlice";
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Data/api";

function Signin() {
  //remember me
  const dispatch = useDispatch();
  const rememberMe = useSelector((state) => state.auth.rememberMe); // Obtenez l'état de "Remember Me"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.auth.authToken);
  
  useEffect(() => {
    // Restaure les valeurs enregistrées lors du chargement initial
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    dispatch(setLoginMessage("")); // on supprime le message Connexion réussie de la connexion précédente

    if (rememberMe && token) {
      // Si "Remember Me" est activé et qu'un token est disponible, connectez l'utilisateur automatiquement
      dispatch(setIsLoggedIn(true));
    }

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, [dispatch, rememberMe, token]);
  const handleRememberMeChange = () => {
    // Gère le changement de la case à cocher "Remember Me"
    dispatch(setRememberMe(!rememberMe));
  };

  // modale pour s'inscrire
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const isOpen = useSelector((state) => state.SignUp.isOpen);

  const handleToggleModal = () => {
    if (isOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };

  // connection
  const authToken = useSelector((state) => state.auth.authToken);
  const loginMessage = useSelector((state) => state.auth.loginMessage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get login status
  const navigate = useNavigate();



//call api  
const handleLogin = async (e) => {
  e.preventDefault(); 
  if (rememberMe) {
    localStorage.setItem("rememberedEmail", email);
    localStorage.setItem("rememberedPassword", password);
  } else {
    localStorage.removeItem("rememberedEmail");
    localStorage.removeItem("rememberedPassword");
  }

  try {
    const authToken = await loginUser(email, password);
    setEmail(""); // Effacez l'e-mail
    setPassword(""); // Effacez le mot de passe
    dispatch(setAuthToken(authToken));
    dispatch(setIsLoggedIn(true)); // il est connecté
    dispatch(setLoginMessage("Connexion réussie"));
    localStorage.setItem("authToken", authToken);
    navigate("/user");
    console.log(authToken);
  } catch (error) {
    console.error("Échec de la connexion");
    dispatch(setLoginMessage(error.message));
  }
};


  return (
    <div>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <p>{loginMessage}</p>
          <form onSubmit={handleLogin}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button"  type="submit">
              Sign In
            </button>
            <button
              onClick={handleToggleModal}
              class="sign-in-button"
              type="button"
            >
              {isOpen ? "Close" : "Sign-up"}
            </button>
            <ModalSignUp />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signin;