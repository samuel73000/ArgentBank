import "../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, updateUserName } from "../Slice/modalEditNameSlice";
import { updateUserNameAPI } from "../Data/api";
import React, { useState, useEffect } from 'react';


function ModalEditName() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.EditName.userData);
// État local pour stocker le nom d'utilisateur modifié
const [newUserName, setNewUserName] = useState(userData.userName);
 // Utilisez useEffect pour mettre à jour newUserName avec la valeur actuelle du nom d'utilisateur lors de l'ouverture de la modal
 useEffect(() => {
  setNewUserName(userData.userName);
}, [userData.userName]);

 // Mettez à jour le nom d'utilisateur dans l'état local lorsque l'entrée change
 const handleUserNameChange = (e) => {
  setNewUserName(e.target.value);
};
  // btn save on recuper le token pour le call api et on envoie le nouveau username avec la method PUT
  const token = useSelector((state) => state.auth.authToken);
  //call api
  const handleSaveClick = async () => {
    try {
      const updatedUserName = userData.userName;
      const response = await updateUserNameAPI(token, updatedUserName);
      dispatch(updateUserName(newUserName));
      dispatch(hideModal());
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };
  //  btn cancel on ferme la modal
  const handleCancelClick = () => {
    dispatch(hideModal());
  };

  return (
    <section className="section-edit-name">
      <h1>Edit user info</h1>

      <div className="modal-edit-user">
        <label for="username">User name:</label>
        <input
          id="username"
          className="input-edit-user"
          value={newUserName}
          onChange={handleUserNameChange}
        ></input>
      </div>
      <div className="modal-edit-user">
        <label for="firstname">Fist name:</label>
        <input
          id="firstname"
          className="input-edit-user1"
          type="text"
          disabled="disabled"
          value={userData.firstName}
        ></input>
      </div>
      <div className="modal-edit-user">
        <label for="lastname">Last name:</label>
        <input
          id="lastname"
          className="input-edit-user"
          type="text"
          disabled="disabled"
          value={userData.lastName}
        ></input>
      </div>
      <div className="div-btn-edit-name">
        <button className="btn-edit-name" onClick={handleSaveClick}>
          Save
        </button>
        <button className="btn-edit-name" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </section>
  );
}

export default ModalEditName;