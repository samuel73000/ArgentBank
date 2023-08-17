import "../Styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, updateUserName } from "../Slice/modalEditNameSlice";

function ModalEditName() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.EditName.userData);


  //  function que on appele dans le onchange du premier input pour stocker le changement
  const handleUserNameChange = (newUserName) => {
    dispatch(updateUserName(newUserName));
  };
  // btn save on recuper le token pour le call api et on envoie le nouveau username avec la method PUT
  const token = useSelector((state) => state.auth.authToken);
  const handleSaveClick = async () => {
    const updatedUserName = userData.userName;

    //  structure attendue par l'API
    const requestBody = {
      userName: updatedUserName,
    };

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      dispatch(hideModal());
    } else {
      throw new Error("Erreur lors de la mise à jour");
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
          value={userData.userName}
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
