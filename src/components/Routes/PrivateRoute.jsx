/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location)
    if(loading){
         
          return <div className="text-center pt-20">
               <span className="loading loading-ball loading-lg"></span>
           </div>    
}
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};


export default PrivateRoute;