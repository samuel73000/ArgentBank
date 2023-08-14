import Accounts from "../../Components/Accounts";
import "../../Styles/index.css"
import React, { useState } from 'react';




function User(){
    

//  test
const [showInput, setShowInput] = useState(false);

  const handleButtonClick = () => {
    setShowInput(!showInput); // Inverse la valeur de showInput lors du clic sur le bouton
  };

// ::::::::::::::::::::::::::::::::::::::::::::::::::::


    const Account = {
        title:["Argent Bank Checking (x8349)","Argent Bank Savings (x6712)","Argent Bank Credit Card (x8349)"],
        amount:["$2,082.79","$10,928.42","$184.30"],
        description:["Available Balance","Available Balance","Current Balance"]
    };

    return(

        <div>
 <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button" onClick={handleButtonClick}>Edit Name
        {showInput ? "Edit Name" : ""}
        </button>
        {showInput && <input type="text" placeholder="Saisissez quelque chose" />} 
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Accounts title={Account.title[0]} amount={Account.amount[0]} description={Account.description[0]} />
      <Accounts title={Account.title[1]} amount={Account.amount[1]} description={Account.description[1]} />
      <Accounts title={Account.title[2]} amount={Account.amount[2]} description={Account.description[2]} />
    </main>
    </div>
    )
}
export default User; 

