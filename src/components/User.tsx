// Handle rendering of user's lists and favorites depending on if they are logged in or not
import "/src/styles/Header.css"
var userLoggedIn = false;

function User() {
  // Add logout button
  if (userLoggedIn) {
    return(
    <div className="user">
      User logged in!
    </div>
    )
  }
  // Add sign in and sign up button
  else {
    return(
      <div className="user-buttons">
        <a href="/login"><button className="login-button">Login</button></a>
        <a href="/register"><button className="register-button">Register</button></a>
      </div>
    )
  }
  
}

export default User