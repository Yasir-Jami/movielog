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
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    )
  }
  
}

export default User