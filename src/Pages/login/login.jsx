import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Login = (props) => {
    const handleLogin = e => {
        e.preventDefault();
       console.log(e.currentTarget);
       const form = new FormData(e.currentTarget);
       const email = form.get('email')
       const password = form.get('password')
       console.log(email, password);
        
    }

    return (

        <div>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control mt-6">
                                <button className="btn ">google login</button>
                            </div>
                        </form>
                        <p className='text-center pb-3'>
                       Dont't have an account? <Link className='text-blue-600' to="/register">Register</Link>
                    </p>
                    </div>
                </div>
            </div>
           
           
        </div>
    );
};

export default Login;