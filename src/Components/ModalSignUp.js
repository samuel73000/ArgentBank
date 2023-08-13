import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setUserName,
  closeModal,} from '../Slice/modalSlice';


const ModalSignUp = () => {

// state de modale 
const isOpen = useSelector((state) => state.modal.isOpen);
const dispatch = useDispatch();


// submit
  const email = useSelector((state) => state.auth.email); // Obtenir l'email depuis le state
  const password = useSelector((state) => state.auth.password); // Obtenir le mot de passe depuis le state
  const firstName = useSelector((state) => state.auth.firstName); // Obtenir le prénom depuis le state
  const lastName = useSelector((state) => state.auth.lastName); // Obtenir le nom depuis le state
  const userName = useSelector((state) => state.auth.userName); // Obtenir le nom d'utilisateur depuis le state


  

const handleSignUp = async () => {
try {
  const response = await fetch("http://localhost:3001/api/v1/user/signup", {
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
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(closeModal());

  } else {
    console.error("Échec de l'inscription");
  }
} catch (error) {
  console.error("Erreur lors de l'inscription :", error);
};}

  
  if (!isOpen) return null;

  return (
    <div className="modal">
      <form className="modal-content">
      <input className='modal-input' type='email' placeholder='E-mail' value={email} onChange={(e) => {dispatch(setEmail(e.target.value))}}></input>
        <input className='modal-input' type="password" placeholder='Password' value={password} onChange={(e) =>{ dispatch(setPassword(e.target.value))}}></input>
        <input className='modal-input' type='text' placeholder='First Name' value={firstName} onChange={(e) => {dispatch(setFirstName(e.target.value))}}></input>
        <input className='modal-input' type='text' placeholder='Last Name' value={lastName} onChange={(e) => {dispatch(setLastName(e.target.value))}}></input>
        <input className='modal-input' type='text' placeholder='User Name' value={userName} onChange={(e) => {dispatch(setUserName(e.target.value))}}></input>
        <button className="sign-in-button" onClick={handleSignUp}>Submit</button>
      </form>
    </div>
  );
};

export default ModalSignUp ;