import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle,FaEye,FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup,  } from "firebase/auth";
import auth from "../../firebase/firebase.config";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Login = () => {
  const [showPassword,setShowPassword]= useState(false);
const {signInUser} = useContext(AuthContext);
const location=useLocation();
  const navigate=useNavigate();  
const googleProvider = new GoogleAuthProvider();

const handleLogin=e=>{
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value;
  console.log(email,password);
  signInUser(email,password)
  .then(result=>{
    console.log(result.user);
    
    
    navigate(location?.state?location.state:'/');
    
  })
  .catch(error=>{
    console.log(error);
    toast("Wrong email/password. Try again");
  })
}
const handleGoogle=()=>{
  signInWithPopup(auth,googleProvider)
  .then(result=>{
    console.log(result.user);
    navigate(location?.state?location.state:'/');

  })
  .catch(error=>{
    console.log(error);

  })
}

    return (
        <div>
            <div className="hero my-10">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-[300px] shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered dark:text-black" required />
        </div>
        <div className="relative">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input dark:text-black input-bordered" required />
          <p className="absolute lg:bottom-[14px] md:bottom-[14px] bottom-[14px] right-5" onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEyeSlash className="dark:text-black"></FaEyeSlash> : <FaEye className="dark:text-black"></FaEye>
            }
          </p>
         
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold text-white">Login</button>
        </div>
      </form>
      <div onClick={handleGoogle} className='flex items-center cursor-pointer border-2 px-4 mx-10 py-1.5 rounded-lg border-blue-600 mb-2'>
                
                <FaGoogle className='text-blue-600 mr-3'></FaGoogle>
                <h2 className='text-blue-600 font-semibold'>Login with Google</h2>
      </div>
      
      <p className="ml-8 mb-4 dark:text-black">New to website? Please <Link className="underline" to="/register">Register</Link></p>
    </div>
    
  </div>
</div>
<ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Login;
