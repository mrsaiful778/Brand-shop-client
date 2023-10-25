import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [displayError, setDisplayError] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password,photo);
        setDisplayError('')

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
                updateProfile(result.user, {
                    displayName : name,
                    photoURL : photo,
                })
                .then(() =>{
                    toast("Registration successfully!");
                    window.location.reload()
                })
                .catch(error =>{
                    console.log(error.message);
                })
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (

        <div>
            <div>
                <h2 className="text-3xl my-10 text-center">
                    Please Register
                </h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="PhotoURl" name="photo" className="input input-bordered" required />
                    </div>
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
                        <div>
                            {displayError && <p className="text-red-500 my-4">{displayError}</p>}
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600" to="/login">please login</Link></p>
            </div>
        </div>
    );
};

export default Register;