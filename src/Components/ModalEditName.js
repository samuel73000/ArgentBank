import "../Styles/index.css";
import { useDispatch ,useSelector } from "react-redux";
import { hideModal } from "../Slice/modalEditNameSlice";




function ModalEditName() {
  const dispatch = useDispatch();
  





  const token = useSelector((state) => state.auth.authToken)

  const handleSaveClick = async () => {
    try {
      await dispatch(fetchProfile(token)); // Appel de la fonction fetchProfile
    } catch (error) {
      console.error(error);
    }
  };



  const fetchProfile = (token) => {
    return async (dispatch) => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  };
  








    const handleCancelClick = () => {
        dispatch(hideModal());
    };
  return (
    <section className="section-edit-name">
      <h1>Edit user info</h1>

      <div className="modal-edit-user">
        <label for="username">User name:</label>
        <input id="username" className="input-edit-user"></input>
      </div>
      <div className="modal-edit-user">
        <label for="firstname">Fist name:</label>
        <input id="firstname" className="input-edit-user1" type="text" disabled="disabled"></input>
      </div>
      <div className="modal-edit-user">
        <label for="lastname">Last name:</label>
        <input id="lastname" className="input-edit-user" type="text" disabled="disabled"></input>
      </div>
      <div className="div-btn-edit-name">
      <button className="btn-edit-name" onClick={handleSaveClick} >Save</button>
      <button className="btn-edit-name" onClick={handleCancelClick}>Cancel</button>
      </div>
    </section>
  );
}

export default ModalEditName;

























