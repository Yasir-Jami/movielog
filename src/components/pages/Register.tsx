// Handles register/sign up page
import {useForm, SubmitHandler, /*SubmitErrorHandler*/} from 'react-hook-form';
import { toast } from "react-toastify";
import "@styles/Register.css";
import { Mail, Lock } from "lucide-react";
import AuthHeader from "@components/ui/AuthHeader";
import { useNavigate } from 'react-router-dom';

interface RegisterFormValues {
  email: string,
  password: string,
  confirmPassword: string,
}

const registerUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USERS}${import.meta.env.VITE_API_REGISTER}`;

function Register() {
  const {register, handleSubmit} = useForm<RegisterFormValues>();
  const navigate = useNavigate();
  // Play loading spinner
  
  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle all non-2XX requests
        const errorData = await response.json();
        logger.error("Error: ", errorData.message);
        toast.error("Error:", errorData.message);
        return;
      }

      const result = await response.json();
      toast.success("Registration successful");
      navigate("/login");
      logger.log("Registration response:" + result);
    }
    catch (error) {
      logger.error("Request failed:", error)
    }
  }
  
  //const onSubmit: SubmitHandler<RegisterFormValues> = (data) => logger.log(data);
  //const onError: SubmitErrorHandler<RegisterFormValues> = (errors) => logger.log(errors);
  
  return (
    <div className="registration-page">
      <AuthHeader />
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit(onSubmit, /*onError*/)} action={registerUrl} method="POST">
          <h1 className="registration-form-header">Create an account</h1>
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
          
          {/*Confirm Password field
          <label htmlFor="password">Confirm Password</label>
          <input 
          type="password" 
          placeholder="Confirm Password" 
          {...register("confirmPassword", {required: true})}/>
          */}

          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="register-messages">
          <p className="have-account-message">Already have an account?</p>
          <a href="/login"><p className="login-account-message">Log in</p></a>
        </div>
      </div>
    </div>
  )
  
}

export default Register