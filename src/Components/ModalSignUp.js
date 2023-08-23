// import { useSelector, useDispatch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  setAuthField,
  closeModal,
  selectAuthEmail,
  selectAuthPassword,
  selectAuthFirstName,
  selectAuthLastName,
  selectAuthUserName,
} from "../Slice/modalSignUpSlice";
import { signUpUser } from "../Data/api";
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
  //call api
  const handleSignUp = async () => {
    try {
      const response = await signUpUser(
        email,
        password,
        firstName,
        lastName,
        userName
      );
      dispatch(closeModal());
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
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
              dispatch(setAuthField({ field: "email", value: e.target.value }));
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
              dispatch(
                setAuthField({ field: "password", value: e.target.value })
              );
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
              dispatch(
                setAuthField({ field: "firstName", value: e.target.value })
              );
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
              dispatch(
                setAuthField({ field: "lastName", value: e.target.value })
              );
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
              dispatch(
                setAuthField({ field: "userName", value: e.target.value })
              );
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
