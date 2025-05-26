// Handle rendering of user's lists and favorites depending on if they are logged in or not

var userLoggedIn = false;

function User() {
  // Add logout button
  if (userLoggedIn) {
    return(
    <div>
      User logged in!
    </div>
  )
  }
  // Add sign in and sign up button
  else {
    return(
      <div>
        <b>User not logged in</b>
      </div>
    )
  }
  
}

export default User