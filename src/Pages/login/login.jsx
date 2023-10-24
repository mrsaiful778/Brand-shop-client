import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';


const Login = (props) => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const nevigate = useNavigate()
    const [loginError, setLoginError] = useState(null);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                nevigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                const message = error.message;
                setLoginError(message);
            })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    }


    return (

        <div >

            <div>
                <h2 className="text-3xl my-10 text-center">
                    please Login
                </h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div>
                        {loginError && <p className="text-red-500 my-4">{loginError}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                < p className="text-center mt-4">Don't have an account? <Link className="text-blue-600" to="/register">please register</Link></p> 
                <p className="text-center my-4"> <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"> <FaGoogle></FaGoogle>Google</button></p>
            </div>

        </div>
    );
};

export default Login;