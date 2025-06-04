// Handles register/sign up page
import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import "/src/styles/Register.css"
let registerUrl: string = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_USER_PATH}${import.meta.env.VITE_API_REGISTER_PATH}`;

interface RegisterFormValues {
  email: string,
  password: string,
  confirmPassword: string,
}

function Register() {

  const {register, handleSubmit} = useForm<RegisterFormValues>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => console.log(data); // write a real handler function
  
  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)} action={registerUrl} method="POST">
        <h1>Create an account</h1>
        <b><label>Email Address</label></b>
        <input id="email" name="email" type="email" placeholder="Enter your email"/>
        <b><label>Password</label></b>
        <input 
          name="password" 
          type="password"
          placeholder="Enter your password"/>
        <b><label>Confirm Password</label></b>
        <input name="confirm-password" type="password" placeholder="Enter password again"/>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  )
  
}

export default Register