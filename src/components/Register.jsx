import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";



const Register = () => {
    const { createRegister } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [loadingError, setLoginError] = useState('')
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)

        createRegister(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    setSuccess('user login in successfully')
                    toast.success('succousfully')
                }else{
                    toast.error('Something in Wrong')
                }
                e.target.reset()
            })
            .catch(error => {
                console.log(error)
                toast.setLoginError('Your information wrong')

            })


        if (password.length < 6) {
            setLoginError('please your password must be 6 character or longer')
            return;
        } else if (!/[a-z]/.test(password)) {
            setLoginError('please must be provide a lower case')
            return
        } else if (!/[A-Z]/.test(password)) {
            setLoginError('please must be provide a Upper case')
            return
        }

    }
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center font-bold text-teal-500">Please Register Now</h1>
            <div className="bg-slate-900  rounded-xl w-3/5 pl-64 py-10 mt-10 mx-auto">
                <form onSubmit={handleRegister} >
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
                    <div>
                        {
                            <p>{loadingError}</p>
                        }
                        {
                            <p>{success}</p>
                        }
                    </div>
                    <input className="btn btn-primary w-3/5 mt-6" type="submit" value="Register" />
                </form>
                <p>You Have An Account? Please <Link to='/login' className="text-teal-400 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;