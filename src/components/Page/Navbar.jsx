import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><a>Home</a></Link>
                            <Link to='/allart'><a>All Art & craft Items</a></Link>
                            <Link to='/addcraft'><a>Add Craft Item</a></Link>
                            <Link to='/myart'><a>My Art&Craft List</a></Link>
                        </ul>
                    </div>
                    <img className="rounded-full w-14" src="https://i.ibb.co/411RJyz/images.pngn " alt="" />
                    <Link to='/' className="btn btn-ghost text-2xl font-bold text-cyan-500">Butter <span className="text-red-500">Craft</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-slate-400 " >
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/allart'><li><a>All Art & craft Items</a></li></Link>
                        <Link to='/addcraft'><li><a>Add Craft Item</a></li></Link>
                        <Link to='/myart'><li><a>My Art&Craft List</a></li></Link>
                    </ul>
                </div>
                <div className="lg:ml-4 flex" >
                
                     <button className="btn">LogOut</button> : <NavLink to='/login'><button className="btn">Log In</button></NavLink>
                
                <Link to='/register'><a className="btn ml-2">Sign Up</a></Link>
            </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:tooltip"   data-tip="Md Saidul Islam">
                        <div className="w-10 rounded-full ">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Navbar;