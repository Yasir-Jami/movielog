import {useForm, SubmitHandler, /*SubmitErrorHandler*/} from 'react-hook-form';
import { UseAuth } from '../AuthContext.tsx';
import { toast } from "react-toastify";
import "/src/styles/Login.css";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
let loginUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USERS}${import.meta.env.VITE_API_LOGIN}`;

interface LoginFormValues {
  email: string,
  password: string,
}

function Login() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const { setUser } = UseAuth();
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
        logger.error("Error:", errorData);
        return;
      }

      else if (response.ok) {
        logger.log("Login was successful");
        const { password, ...userDataNoPassword } = userData;
        setUser(userDataNoPassword);

        navigate(import.meta.env.VITE_PATH_HOME);
        toast("Logged in");
      }

      else {
        logger.log("Server returned an invalid response.");
        toast("Server returned an invalid response.");
      }

    }
    catch (error) {
      logger.error("Request failed:", error);
    }
  }
  
  //const onSubmit: SubmitHandler<LoginFormValues> = (data) => logger.log(data);
  //const onError: SubmitErrorHandler<LoginFormValues> = (errors) => logger.log(errors);
  
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit, /*onError*/)} action={loginUrl} method="POST">
        <h1>Log in to your account</h1>
        
        {/*Email field*/}
        <div className="email-field">
          <Mail className="email-icon"/>
          <input 
          type="email" 
          placeholder="Email"
          {...register("email", {required: true})}></input>
        </div>
        
        {/*Password field*/}
        <div className="password-field">
          <Lock className="password-icon"/>
          <input 
          type="password" 
          placeholder="Password" 
          {...register("password", {required: true})}></input>
        </div>
        
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