// Login page
import "/src/styles/Login.css"
let url: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USER_PATH}${import.meta.env.VITE_API_CREATE_USER_PATH}`;

function Login() {

  return (
    <div>
      <form className="login-form" action={url} method="POST"></form>
      <label className="email-label">Email Address</label>
      <input type="email"/>
      <label className="password-label">Password</label>
      <input type="password"/>
    </div>
  )
  
}

export default Login