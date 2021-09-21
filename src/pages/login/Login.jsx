import './login.css';
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="Login">
            <h1 className="newUserTitle">SIGN IN</h1>
            <form className="loginForm">
        <div className="loginItem">
          <label>USERNAME</label>
          <input type="text"/>
        </div>
        <div className="loginItem">
          <label>PASSWORD</label>
          <input type="password"  />
        </div>
        <button className="loginButton">LOG IN</button>
      </form>
        <div className="loginLink">
            <Link to="/newUser">CREATE A NEW ACCOUNT</Link>
        </div>
        </div>
    );
}