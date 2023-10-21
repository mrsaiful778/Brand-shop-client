import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = (props) => {
    const { createUser } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setDisplayError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setDisplayError('Your Password must contain a Capital Letter');
            return;
        }
        else if (!/^(?=.*[!@#$%^&*()_+{}:;<>,.?~\\|-])/.test(password)) {
            setDisplayError('Password must contain a Special Character');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <div>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <div>
                                    {displayError && <p className="text-red-500 my-4">{displayError}</p>}
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                        </form>
                        <p className='text-center pb-3'>
                            Already have an account? <Link className='text-blue-600' to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;