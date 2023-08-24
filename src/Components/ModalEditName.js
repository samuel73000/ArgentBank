import "../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, updateUserName } from "../Slice/modalEditNameSlice";
import { updateUserNameAPI } from "../Data/api";
import { useState } from "react";


function ModalEditName() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.EditName.userData);
// Créez une copie locale du nom d'utilisateur pour stocker les modifications
const [localUserName, setLocalUserName] = useState(userData.userName);
 
  const handleUserNameChange = (newUserName) => {
    setLocalUserName(newUserName); // Mettez à jour localUserName avec la nouvelle valeur de l'input
  };
  // btn save on recuper le token pour le call api et on envoie le nouveau username avec la method PUT
  const token = useSelector((state) => state.auth.authToken);
  //call api
  const handleSaveClick = async () => {
    try {
      const response = await updateUserNameAPI(token, localUserName);
      // Après la mise à jour réussie de l'API, mettez à jour le Redux Store
      dispatch(updateUserName(localUserName));
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
          value={localUserName}
          onChange={(e) => handleUserNameChange(e.target.value)}
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
