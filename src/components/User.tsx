// Handle rendering of user's lists and favorites depending on if they are logged in or not
import "/src/styles/Header.css"
import {useState} from 'react';
var userEmail = "greg@gmail.com";

function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("User has logged in");
  }
  */

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User has logged out");
  }

  // Add logout button
  if (isLoggedIn) {
    return(
    <div className="user-area">
      <p>Logged in as {userEmail}</p>
      {/*<a href="."><button className="header-logout-button" onClick={onLogout}>Logout</button></a>*/}
      <button className="header-logout-button" onClick={handleLogout}>Logout</button>
    </div>
    )
  }
  // Add sign in and sign up button
  else {
    return(
      <div className="user-area">
        {/*<button className="header-login-button" onClick={handleLogin}>Login</button>*/}
        <a href="/login"><button className="header-login-button">Login</button></a>
        <a href="/register"><button className="header-register-button">Register</button></a>
      </div>
    )
  }
  
}

export default User