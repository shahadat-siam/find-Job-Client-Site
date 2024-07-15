import { Link } from "react-router-dom";

 
const Navbar = () => {
    return (
        <div className="bg-[#153448] max-w-7xl mx-auto w-full px-14 py-3">
            <div className="flex justify-between items-center">
                <div className="text-4xl font-bold text-[#008080]">Find Job</div>
                <div className="flex text-white gap-8 items-center ">
                     <Link to='/'><p>Home</p></Link>
                     <Link to='add-job'><p>Add Job</p></Link>
                     {/* <Link to='all-jobs'><p>All Jobs</p></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;