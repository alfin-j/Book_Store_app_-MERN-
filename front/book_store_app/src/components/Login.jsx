import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
//import { signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../src/Firebase/firebase';

const Login = () => {
    const [message,setMessage]=useState("")
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    const onSubmit = async (data) => {
      console.log("Submitting data:", data);

      try {
          const response = await fetch('http://localhost:5002/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });

          console.log("Response status:", response.status);

          if (response.ok) {
              const result = await response.json();
              console.log('Login successful:', result);
              console.log("fronedn token",result.token)
              localStorage.setItem("authUser",result.token)
              // Redirect to Home page after successful login
              //`/home/${response.id}`
              
              
              navigate("/home"); 
          } else {
              const error = await response.json();
              setMessage(error.error);  // Display error message from the server
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorect email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              console.error('Login failed:', error);
          }
      } catch (error) {
          console.error('Error:', error);
          setMessage('An error occurred during login');
      }
  };
   

    const handleGoogleSignIn=()=>{
        
    }

  return (
   <div className='h-[calc(100vh-120px)] flex justify-center items-center bg-gradient-to-r from-white-600 to-white-300'>
  <div className='w-full max-w-sm mx-auto bg-white p-10 rounded-lg shadow-xl'>
    <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Login to Your Account</h2>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-6'>
        <label className='block text-gray-700 text-sm font-medium mb-2' htmlFor="email">Email</label>
        <input 
          {...register("email", { required: true })}
          type="email" name='email' id='email' placeholder='Enter your email'
          className='w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300' />
      </div>
      
      <div className='mb-6'>
        <label className='block text-gray-700 text-sm font-medium mb-2' htmlFor="password">Password</label>
        <input 
          {...register("password", { required: true })}
          type="password" name='password' id='password' placeholder='Enter your password'
          className='w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300' />
      </div>
      
      {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}
      
      <div>
        <button className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl focus:outline-none transition duration-300'>
          Login
        </button>
      </div>
    </form>
    
    <p className='text-center text-sm text-gray-600 mt-4'>
      Don't have an account? <Link to="/" className='text-red-600 hover:text-red-800'>Register</Link>
    </p>
    
    {/* Google Sign In */}
    <div className='mt-6'>
      <button 
        onClick={handleGoogleSignIn}
        className='w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-xl focus:outline-none transition duration-300'>
        <FaGoogle className='mr-2' />
        Sign in with Google
      </button>
    </div>

    <p className='mt-6 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
  </div>
</div>

  )
}

export default Login
