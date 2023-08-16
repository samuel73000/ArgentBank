import "../Styles/index.css";
import React, { useEffect } from 'react';
import { useDispatch ,useSelector } from "react-redux";
import { hideModal , setUserName,setFirstName,setLastName} from "../Slice/modalEditNameSlice";




function ModalEditName() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.EditName.userData);
  const token = useSelector((state) => state.auth.authToken)




  useEffect(() => {
    dispatch(fetchProfile(token));
  }, [dispatch, token]);

  


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
          // dispatch(setUserData.userName(data.body.userName));
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        dispatch(setUserName(data.body.userName));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
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
      <button className="btn-edit-name">Save</button>
      <button className="btn-edit-name" onClick={handleCancelClick}>Cancel</button>
      </div>
    </section>
  );
}

export default ModalEditName;




