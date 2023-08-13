import "../../Styles/index.css";
import React, { useState , useEffect  } from "react";



function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  
const handleLogin = async () => {
  
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      const data = await response.json();
      const authToken = data.authToken;
      document.location.href="http://localhost:3000/user"; 
      setLoginMessage("Connexion réussie"); // Mise à jour du message en cas de succès
    } else {
      console.error("Échec de la connexion");
      setLoginMessage("Mot de passe ou email incorrects."); // Mise à jour du message en cas d'échec
    }
  } catch (error) {
    setLoginMessage("Erreur lors de la connexion : " + error); // Mise à jour du message en cas d'erreur
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
              <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
             <button class="sign-in-button" onClick={handleLogin}  type="button">Sign In</button> 
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signin;