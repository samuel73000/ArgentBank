// import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setUserName,
  closeModal,
  selectAuthEmail,
  selectAuthPassword,
  selectAuthFirstName,
  selectAuthLastName,
  selectAuthUserName,
} from "../Slice/modalSignUpSlice";

const ModalSignUp = () => {
  useEffect(() => {
    dispatch(closeModal()); // Fermer la modal lors du chargement de la page
  }, []);

  const isOpen = useSelector((state) => state.SignUp.isOpen);
  const dispatch = useDispatch();
  const email = useSelector(selectAuthEmail);
  const password = useSelector(selectAuthPassword);
  const firstName = useSelector(selectAuthFirstName);
  const lastName = useSelector(selectAuthLastName);
  const userName = useSelector(selectAuthUserName);
  const handleSignUp = () => {
    fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(closeModal());
          return response.json();
        } else {
          dispatch(closeModal());
          throw new Error("Échec de l'inscription");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <form className="modal-content">
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              dispatch(setEmail(e.target.value));
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              dispatch(setPassword(e.target.value));
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              dispatch(setFirstName(e.target.value));
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              dispatch(setLastName(e.target.value));
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <input
            className="modal-input"
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => {
              dispatch(setUserName(e.target.value));
            }}
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
