import Accounts from "../../Components/Accounts";
import "../../Styles/index.css";
import ModalEditName from "../../Components/ModalEditName";
import { useSelector, useDispatch } from "react-redux";
import { hideEditButton } from "../../Slice/modalEditNameSlice";


function User() {
  const Account = {
      title: ["Argent Bank Checking (x8349)", "Argent Bank Savings (x6712)", "Argent Bank Credit Card (x8349)"],
      amount: ["$2,082.79", "$10,928.42", "$184.30"],
      description: ["Available Balance", "Available Balance", "Current Balance"],
  };

  const dispatch = useDispatch();
  const { showEditButton, showModal, showWelcomeMessage } = useSelector(state => state.EditName);

  const handleEditButtonClick = () => {
      dispatch(hideEditButton());
  };

  return (
      <div>
          <main className="main bg-dark">
              <div className="header">
                  {showWelcomeMessage && <h1>Welcome back<br />Tony Jarvis!</h1>}
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










