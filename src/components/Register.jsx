import { Link } from "react-router-dom";



const Register = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center font-bold text-teal-500">Please Register Now</h1>
            <div className="bg-slate-900  rounded-xl w-3/5 pl-64 py-10 mt-10 mx-auto">
                <form >
                    <div >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-3/5" type="text" name="name" placeholder="Name" id="" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input className="input input-bordered w-3/5" type="text" name="photo" placeholder="Photo URL" id="" />
                    </div>
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
                    </div>
                    <input className="btn btn-primary w-3/5 mt-6" type="submit" value="Register" />
                </form>
                <p>You Have An Account? Please <Link to='/login' className="text-teal-400 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;