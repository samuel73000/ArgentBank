import "../../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthToken,
  setLoginMessage,
  setEmailSignIn,
  setPasswordSignIn,
  setIsLoggedIn,
} from "../../Slice/authSlice";
import ModalSignUp from "../../Components/ModalSignUp";
import { openModal, closeModal } from "../../Slice/modalSlice";

function Signin() {
  // modale pour s'inscrire

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleToggleModal = () => {
    if (isOpen) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };

  // connection
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.authToken);
  const loginMessage = useSelector((state) => state.auth.loginMessage);
  const email = useSelector((state) => state.auth.emailSignIn); // Get email
  const password = useSelector((state) => state.auth.passwordSignIn); // Get password
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get login status

  // post l'email et et mdp
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //  si le mdp et email sontok
      if (response.ok) {
        const data = await response.json();
        dispatch(setEmailSignIn("")); // Clear email
        dispatch(setPasswordSignIn("")); // Clear password
        dispatch(setAuthToken(data.authToken));
        dispatch(setIsLoggedIn(true)); // il est connecter
        dispatch(setLoginMessage("Connexion réussie"));
        localStorage.setItem("authToken", data.authToken);
        document.location.href = "http://localhost:3000/user";
        // si le mdp et email sont pas ok
      } else {
        console.error("Échec de la connexion");
        dispatch(setLoginMessage("Mot de passe ou email incorrects."));
      }
      // si il a un probleme avec l'api
    } catch (error) {
      dispatch(setLoginMessage("Erreur lors de la connexion : " + error));
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <p>{loginMessage}</p>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => {
                  dispatch(setEmailSignIn(e.target.value));
                }}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  dispatch(setPasswordSignIn(e.target.value));
                }}
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button" onClick={handleLogin} type="button">
              Sign In
            </button>
            <button onClick={handleToggleModal} class="sign-in-button">
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
