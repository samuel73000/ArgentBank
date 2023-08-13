import "../../Styles/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken, setLoginMessage , setEmail, setPassword } from '../../Slice/authSlice';



function Signin() {



  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.authToken);
  const loginMessage = useSelector((state) => state.auth.loginMessage);
  const email = useSelector((state) => state.auth.email); // Get email from Redux state
  const password = useSelector((state) => state.auth.password); // Get password from Redux state

  


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setEmail('')); // Clear email after successful login
        dispatch(setPassword('')); // Clear password after successful login
        dispatch(setAuthToken(data.authToken));
        dispatch(setLoginMessage('Connexion réussie'));
        document.location.href = 'http://localhost:3000/user';
      } else {
        console.error('Échec de la connexion');
        dispatch(setLoginMessage('Mot de passe ou email incorrects.'));
      }
    } catch (error) {
      dispatch(setLoginMessage('Erreur lors de la connexion : ' + error));
      console.error('Erreur lors de la connexion :', error);
    }
  };




  return (
    <div>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <p>{loginMessage}</p>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" value={email} onChange={(e) => {dispatch(setEmail(e.target.value));}} />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" value={password}  onChange={(e) => {dispatch(setPassword(e.target.value));}} />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
             <button class="sign-in-button" onClick={handleLogin}  type="button">Sign In</button> 
          </form>
        </section>
      </main>
    </div>
  );
}

export default Signin;


