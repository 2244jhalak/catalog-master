import { Link} from "react-router-dom";
import Error from "../../../src/assets/images/electronic-slider-1"


const ErrorPage = () => {
    
    return (
        <div className="text-center mt-20 font-semibold">
    
    <img className="mx-auto" src={Error} alt="404" />
   
    
    <div className="animate-bounce mt-6">
      <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    
    <div className="text-center my-2 font-semibold space-y-3">
            
      <Link to="/"><button className="text-white bg-green-500 btn">Go Back</button></Link>
            
        </div>
  
</div>
    
  

    );
};

export default ErrorPage;