import {useForm, SubmitHandler, SubmitErrorHandler} from 'react-hook-form';
import { toast } from "react-toastify";
import "/src/styles/Login.css"
let loginUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USER_PATH}${import.meta.env.VITE_API_REGISTER_PATH}`;

interface LoginFormValues {
  email: string,
  password: string,
  confirmPassword: string,
}

function Login() {
  const {register, handleSubmit} = useForm<LoginFormValues>();
  // Play loading spinner
  
  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle all non-2XX requests
        const errorData = await response.json();
        console.error("Error:", errorData);
        return;
      }

      const result = await response.json();
      toast("User successfully registered");
      console.log(result);
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
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="Enter your email" {...register("email", {required: true})}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter a password" {...register("password", {required: true})}/>
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