import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('synthwave')

    const handleLogOUt = () => {
        logOut()
    }


    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])

    const handleToggle = e =>{
         if(e.target.checked){
            setTheme('light')
         }else{
            setTheme('synthwave')
         }
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-52">
                            <Link to='/'><a>Home</a></Link>
                            <Link to='/allart'><a>All Art & craft Items</a></Link>
                            <Link to='/addcraft'><a>Add Craft Item</a></Link>
                            <Link to='/myart'><a>My Art&Craft List</a></Link>
                        </ul>
                    </div>
                    <img className="rounded-full w-8 lg:w-14" src="https://i.ibb.co/411RJyz/images.pngn " alt="" />
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

                    {
                        user ? <button onClick={handleLogOUt} className="btn text-teal-400 lg:w-28">LogOut</button> : <NavLink to='/login'><button className="text-teal-400 btn w-28">Log In</button></NavLink>
                    }

                    <Link to='/register'><a className="btn lg:mx-4 lg:w-28 text-teal-400">Sign Up</a></Link>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:tooltip" data-tip="Md Saidul Islam">
                        <div className="w-10 rounded-full ">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <label className="cursor-pointer lg:ml-4 grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;