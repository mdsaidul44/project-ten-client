import { Outlet } from "react-router-dom";  
import Navbar from "../components/Page/Navbar";

 

const Root = () => {
    return (
        <div className="m-10">  
            <Navbar/>
            <Outlet/>

        </div>
    );
};

export default Root;