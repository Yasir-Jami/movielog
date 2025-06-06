// Handles register/sign up page
import {useForm, SubmitHandler, /*SubmitErrorHandler*/} from 'react-hook-form';
import { toast } from "react-toastify";
import "/src/styles/Register.css"

let registerUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USERS}${import.meta.env.VITE_API_REGISTER}`;

interface RegisterFormValues {
  email: string,
  password: string,
  confirmPassword: string,
}

function Register() {
  const {register, handleSubmit} = useForm<RegisterFormValues>();
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
        console.error("Error: ", errorData.message);
        toast.error("Error:", errorData.message);
        return;
      }

      const result = await response.json();
      toast("User successfully registered");
      console.log("Registration response:" + result);
    }
    catch (error) {
      console.error("Request failed:", error)
    }
  }
  
  //const onSubmit: SubmitHandler<RegisterFormValues> = (data) => console.log(data);
  //const onError: SubmitErrorHandler<RegisterFormValues> = (errors) => console.log(errors);
  
  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit, /*onError*/)} action={registerUrl} method="POST">
        <h1>Create an account</h1>
        <label htmlFor="email">Email Address</label>
        <input className="email-input" type="email" placeholder="Enter your email" {...register("email", {required: true})}/>
        <label htmlFor="password">Password</label>
        <input className="password-input" type="password" placeholder="Enter a password" {...register("password", {required: true})}/>
        {/*<input type="password" placeholder="Enter password again" {...register("confirmPassword", {required: true})}/>*/}
        <button type="submit" className="register-button">Register</button>
      </form>
      <div className="register-messages">
        <p className="have-account-message">Already have an account?</p>
        <a href="/login"><p className="login-account-message">Log in</p></a>
      </div>
    </div>
  )
  
}

export default Register