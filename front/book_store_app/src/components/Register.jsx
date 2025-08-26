import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [message,setMessage]=useState("")
    
    const navigate = useNavigate();
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
    } = useForm()
        
    //const onSubmit = (data) => console.log(data)
    const onSubmit = async (data) => {
      console.log("Submitting data:", data);
      
      try {
          const response = await fetch('http://localhost:5002/registerdata', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });
  
          console.log("Response status:", response.status); // Log status code
  
          if (response.ok) {
              const result = await response.json();
              console.log('User data saved:', result);
              navigate("/login")
          } else {
              const error = await response.json();
              console.error('Failed to save data:', error);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };



    
    const handleGoogleSignIn=()=>{
            
    }
    


  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center bg-gradient-to-r from-white-600 to-white-700'>
  <div className='w-full max-w-sm mx-auto bg-white p-10 rounded-lg shadow-xl'>
    <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Create Your Account</h2>
    
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
        <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl focus:outline-none transition duration-300'>
          Register
        </button>
      </div>
    </form>

    <p className='text-center text-sm text-gray-600 mt-4'>
      Already have an account? <Link to="/login" className='text-indigo-600 hover:text-indigo-800'>Login</Link>
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

export default Register
