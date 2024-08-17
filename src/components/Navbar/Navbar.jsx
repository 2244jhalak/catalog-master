import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user,logOut} = useContext(AuthContext);
    const logOutUser=()=>{
        logOut();
        
      }
    console.log(user);
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div>
            <nav className="relative bg-blue-950 shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex">
                <div className="text-white flex items-center">
                    <h3 className="text-xl w-44">Catalog Master</h3>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-blue-950 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}>
                    <div className="flex items-center flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <a href="/" className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg hover:text-gray-500 md:mx-2">Home</a>
                        <a onClick={()=>scrollToSection('collection')} className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg hover:text-gray-500 md:mx-2 cursor-pointer">Our Products Collection</a>
                       
                        {
                            user ?
                            <Link className="px-5 text-white transition-colors duration-300 transform rounded-lg hover:bg-blue-800 md:mx-2 border-0 btn btn-outline" onClick={logOutUser}><FaUserAltSlash></FaUserAltSlash>Logout</Link>
                            :
                            <Link className="px-5 text-white transition-colors duration-300 transform rounded-lg hover:bg-blue-800 md:mx-2 border-0 btn btn-primary" to="/login"><FaUserAlt></FaUserAlt>Login</Link>

                        }
                        
                    </div>

                    {/*  */}
                </div>
            </div>
        </nav>
            
        </div>
    );
};

export default Navbar;