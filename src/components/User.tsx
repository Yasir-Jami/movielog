// Handle rendering of user's lists and favorites depending on if they are logged in or not
import "/src/styles/Header.css"
import { UseAuth } from "./AuthContext";

function User() {
  const {user, isAuthenticated, logout} = UseAuth();
  logger.log("Authenticated status: " + isAuthenticated);

  // Logged in
  if (isAuthenticated && user) {
    return(
    <div className="user-area">
      <p id="header-user-email">Logged in as {user.email}</p>
      <a href="/home"><button className="header-logout-button" onClick={logout}>Logout</button></a>
    </div>
    )
  }

  // Logged out
  return(
    <div className="user-area">
      {/*<button className="header-login-button" onClick={handleLogin}>Login</button>*/}
      <a href="/login"><button className="header-login-button">Login</button></a>
      <a href="/register"><button className="header-register-button">Register</button></a>
    </div>
  )
  
}

export default User