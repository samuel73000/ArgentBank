import "../Styles/index.css";
import { useDispatch ,useSelector } from "react-redux";
import { hideModal } from "../Slice/modalEditNameSlice";




function ModalEditName() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.EditName.userData);
 
  

  const handleSaveClick  = () => {
    
    // Envoyez userNameInput au backend ici
    // dispatch(setUserName(userNameInput));
  };

  
   
    const handleCancelClick = () => {
        dispatch(hideModal());
    };
  return (
    <section className="section-edit-name">
      <h1>Edit user info</h1>

      <div className="modal-edit-user">
        <label for="username">User name:</label>
        <input id="username" className="input-edit-user" value={userData.userName}></input>
      </div>
      <div className="modal-edit-user">
        <label for="firstname">Fist name:</label>
        <input id="firstname" className="input-edit-user1" type="text" disabled="disabled" value={userData.firstName}></input>
      </div>
      <div className="modal-edit-user">
        <label for="lastname">Last name:</label>
        <input id="lastname" className="input-edit-user" type="text" disabled="disabled" value={userData.lastName}></input>
      </div>
      <div className="div-btn-edit-name">
      <button className="btn-edit-name" onClick={handleSaveClick}>Save</button>
      <button className="btn-edit-name" onClick={handleCancelClick}>Cancel</button>
      </div>
    </section>
  );
}

export default ModalEditName;




