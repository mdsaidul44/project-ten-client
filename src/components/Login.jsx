import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub ,FaGoogle} from "react-icons/fa"; 



const Login = () => {
    const {  createLogin, createGoogle,createGithub} = useContext(AuthContext)


    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        createLogin(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const handleGoogle =()=>{
        createGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    const handleGithub =()=>{
        createGithub()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center font-bold text-teal-500"> Login Now</h1>
            <div className="bg-slate-900 h-[450px] rounded-xl w-3/5 pl-64 py-10 mt-10 mx-auto">
                <form onSubmit={handleLogin}>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-3/5" type="email" name="email" placeholder="Email Address" id="" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-3/5  " type="password" name="password" placeholder="Password" id="" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input className="btn btn-primary w-3/5" type="submit" value="login" />
                </form>
                <div className="flex gap-10">
                    <div className="ml-24 mt-4">
                    <button onClick={handleGoogle} className="  rounded-full" ><FaGoogle className="text-3xl ml-3 bg-black rounded-full " /></button>
                    <p className="font-semibold text-gray-600-400">Google</p>
                    </div>
                    <div className="mt-4">
                    <button onClick={handleGithub} className="  rounded-full"><FaGithub className="text-3xl ml-3 bg-black rounded-full "  /></button>
                    <p className="font-semibold text-gray-400">Github</p>
                    </div>
                </div>
                <p className="mt-4">New Hare? Please <Link to='/Register' className="text-gray-600 font-bold underline">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;