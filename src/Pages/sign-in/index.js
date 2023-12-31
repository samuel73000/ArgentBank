import "../../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthToken,
  setIsLoggedIn,
  setRememberMe,
} from "../../Slice/authSlice";
import ModalSignUp from "../../Components/ModalSignUp";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Data/api";

function Signin() {
  //remember me
  const dispatch = useDispatch();
  const rememberMe = useSelector((state) => state.auth.rememberMe); // Obtenez l'état de "Remember Me"
  const [email, setEmail] = useState("");// Obtenez l'état de "email"
  const [password, setPassword] = useState("");// Obtenez l'état de "password"
  const [loginMessage, setLoginMessage] = useState("");// Obtenez l'état de "du message de connexion"
  const token = useSelector((state) => state.auth.authToken);
  const [ModalIsOpen, setModalIsOpen] = useState(false);


  useEffect(() => {
    // Restaure les valeurs enregistrées lors du chargement initial
    const storedEmail = getCookie("rememberedEmail");
    const storedPassword = getCookie("rememberedPassword");
    setLoginMessage(""); // on supprime le message Connexion réussie de la connexion précédente

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

  // function pour ouvire la modale pour s'inscrire
  const handleOpenModal = () => {
    setModalIsOpen(!ModalIsOpen);
  };

  
  // connection
   useSelector((state) => state.auth.authToken); // pour stocker le token
  useSelector((state) => state.auth.isLoggedIn); // savoir si il est connecter ou pas 
  const navigate = useNavigate();

  //call api
  const handleLogin = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      setCookie("rememberedEmail", email, 30); // si il click sur remember me Cookie expirera dans 30 jours
      setCookie("rememberedPassword", password, 30);
    } else {
      deleteCookie("rememberedEmail");// si il click pas sur remember me on supprime les cookie 
      deleteCookie("rememberedPassword");
    }
    //envoie l'email et le mdp a l'api 
    try {
      const authToken = await loginUser(email, password);
      setEmail(""); // Effacez l'e-mail
      setPassword(""); // Effacez le mot de passe
      dispatch(setAuthToken(authToken));
      dispatch(setIsLoggedIn(true)); // change l'etat de connection 
      setLoginMessage("Connexion réussie");// on affiche un message qui confirme la connexion
      localStorage.setItem("authToken", authToken);// on stocke le token dans le localstorage
      navigate("/user");// on redirige a la page user
    } catch (error) {
      setLoginMessage("Échec de la connexion");// on affiche que la connexion na pas fonctionner
      console.error("Échec de la connexion");
    }
  };


// Fonction pour définir un cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

// Fonction pour récupérer la valeur d'un cookie par son nom
const getCookie = (name) => {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};

// Fonction pour supprimer un cookie par son nom
const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
            <button class="sign-in-button" type="submit">
              Sign In
            </button>
            <button
              onClick={handleOpenModal}
              class="sign-in-button"
              type="button"
            >
              {ModalIsOpen ? "Close" : "Sign-up"}
            </button>
           {ModalIsOpen && <ModalSignUp />} 
            
            
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signin;
