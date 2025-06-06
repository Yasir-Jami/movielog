import {useForm, SubmitHandler, /*SubmitErrorHandler*/} from 'react-hook-form';
import { useAuth } from './AuthContext.tsx';
import { toast } from "react-toastify";
import "/src/styles/Login.css"
import { useNavigate } from "react-router-dom";
let loginUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USERS}${import.meta.env.VITE_API_LOGIN}`;

interface LoginFormValues {
  email: string,
  password: string,
}

function Login() {
  const {register, handleSubmit} = useForm<LoginFormValues>();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  // Play loading spinner
  
  const onSubmit: SubmitHandler<LoginFormValues> = async (userData) => {
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        // Handle all non-2XX requests
        const errorData = await response.json();
        console.error("Error:", errorData);
        return;
      }

      else if (response.ok) {
        console.log("Login was successful");
        setUser(userData);

        navigate(import.meta.env.VITE_PATH_HOME);
        toast("Logged in");
      }

      else {
        console.log("Server gave an invalid response.");
        toast("Server gave an invalid response.");
      }

    }
    catch (error) {
      console.error("Request failed:", error);
    }
  }
  
  //const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);
  //const onError: SubmitErrorHandler<LoginFormValues> = (errors) => console.log(errors);
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit, /*onError*/)} action={loginUrl} method="POST">
        <h1>Log in to your account</h1>
        
        {/*Email field*/}
        <label htmlFor="email">Email Address</label>
        <input 
        type="email" 
        placeholder="Enter your email"
        {...register("email", {required: true})}/>
        
        {/*Password field*/}
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        placeholder="Enter a password" 
        {...register("password", {required: true})}/>
        
        <button type="submit" className="login-button">Log In</button>
      </form>
      
      <div className="login-messages">
        <p className="no-account-message">Don't have an account?</p>
        <a href="/register"><p className="create-account-message">Register</p></a>
      </div>
    </div>
  )
}

export default Login