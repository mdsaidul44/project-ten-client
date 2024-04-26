import { Link } from "react-router-dom";

 

const Register = () => {
    return (
        <div>
            <h1 className="text-3xl text-center text-teal-500">Please Register Now</h1>
            <form> 
                <div>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your Name" id="" /> 
                </div> 
                <div>
                <span>Photo URL</span>
                <input type="text" name="photo" placeholder="Your Photo URL" id="" /> 
                </div> 
                <div>
                <span>Email</span>
                <input type="email" name="email" placeholder="Your Email Address" id="" /> 
                </div> 
                <div>
                <span>Password</span>
                <input type="password" name="password" placeholder="Your Email Address" id="" /> 
                </div>  
                <input type="submit" value="Register" />
            </form>
            <p>You Have An Account? Please <Link to='/login' className="text-teal-400 font-bold">Login</Link></p>
        </div>
    );
};

export default Register;