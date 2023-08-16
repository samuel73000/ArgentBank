import Accounts from "../../Components/Accounts";
import "../../Styles/index.css";
import ModalEditName from "../../Components/ModalEditName";
import { useSelector, useDispatch } from "react-redux";
import { hideEditButton ,setFirstName,setLastName ,setUserName} from "../../Slice/modalEditNameSlice";
import React, { useEffect } from 'react';


function User() {
  const Account = {
      title: ["Argent Bank Checking (x8349)", "Argent Bank Savings (x6712)", "Argent Bank Credit Card (x8349)"],
      amount: ["$2,082.79", "$10,928.42", "$184.30"],
      description: ["Available Balance", "Available Balance", "Current Balance"],
  };
  const handleEditButtonClick = () => {
    dispatch(hideEditButton());
};
  const dispatch = useDispatch();
  const { showEditButton, showModal, showWelcomeMessage } = useSelector(state => state.EditName);
  const userData = useSelector((state) => state.EditName.userData);
  const token = useSelector((state) => state.auth.authToken)// on prend token 
  useEffect(() => {// permet que la function fetchPorfile sa fasse au chargement de la page 
    dispatch(fetchProfile(token));
  }, [dispatch, token]);

  const fetchProfile = (token) => {//call api pour recuper infi de utilisateur avec le token que j'ai mis dans le localStorage depuis la connection
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





  

  return (
      <div>
          <main className="main bg-dark">
              <div className="header">
                  {showWelcomeMessage && <h1>Welcome back<br />{userData.firstName} {userData.lastName}</h1>}
                  {showEditButton && <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>}
                  {showModal && <ModalEditName />}
              </div>
              <h2 className="sr-only">Accounts</h2>
              <Accounts title={Account.title[0]} amount={Account.amount[0]} description={Account.description[0]} />
              <Accounts title={Account.title[1]} amount={Account.amount[1]} description={Account.description[1]} />
              <Accounts title={Account.title[2]} amount={Account.amount[2]} description={Account.description[2]} />
          </main>
      </div>
  )
}

export default User;










