import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
    //google login
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    //google
    return (

        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/* <div className="form-control mt-6">
                                <button className="btn ">google login</button>
                            </div> */}
                        </form>
                        < p className="text-center mt-4">Don't have an account? <Link className="text-blue-600" to="/register">please register</Link></p>
                        <p className="text-center my-4"> <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"> <FaGoogle></FaGoogle>Google</button></p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;