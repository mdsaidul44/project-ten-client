import { Outlet } from "react-router-dom";  
import Navbar from "../components/Page/Navbar";
import Footer from "../components/Page/Footer";

 

const Root = () => {
    return (
       <div>
         <div className=" mt-10 lg:mx-20">  
            <Navbar/>
            <Outlet/>
            
        </div>
       <div className="mt-10">
       <Footer/>
       </div>
       </div>
    );
};

export default Root;