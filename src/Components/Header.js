import "../Styles/index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="main-nav">
        <NavLink to="/" className={"main-nav-logo"}>
          <img
            class="main-nav-logo-image"
            src={require("../Assets/argentBankLogo.png")}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/Sign-in" className={"main-nav-item"}>
          <i class="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Header;
