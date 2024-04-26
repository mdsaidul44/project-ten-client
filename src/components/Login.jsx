import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center font-bold text-teal-500"> Login Now</h1>
            <div className="bg-slate-900 h-[400px] rounded-xl w-3/5 pl-64 py-10 mt-10 mx-auto">
                <form >
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
                    <input className="btn btn-primary w-3/5 mt-6" type="submit" value="Register" />
                </form>
                <p className="mt-4">New Hare? Please <Link to='/Register' className="text-teal-400 font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;