import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id="collection">
               <AllProducts></AllProducts>
            </div>
            
            
        </div>
    );
};

export default Home;