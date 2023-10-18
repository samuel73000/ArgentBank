import React, { useState} from "react";
import { signUpUser } from "../Data/api";
const ModalSignUp = () => {

  

  //États locaux pour gérer les données du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  //call api
  const handleSignUp = async () => {
    try {
       await signUpUser(
        email,
        password,
        firstName,
        lastName,
        userName
      );
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };


  return (
    <div className="modal">
      <form className="modal-content">
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <button className="sign-in-button" onClick={handleSignUp}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalSignUp;
