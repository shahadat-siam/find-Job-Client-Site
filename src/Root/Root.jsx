import { Outlet } from "react-router-dom"; 
import Navbar from "../Component/Shared/Navbar";

 
const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;