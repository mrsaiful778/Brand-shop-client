import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/image/Perfume_Palace_logo_Final.webp'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>

    </>

    return (

        <div className=''>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-32' src={logo} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 mr-2 rounded-full">
                            <img src="https://i.ibb.co/FmqyX29/avatar.webp" />
                        </div>
                    </label>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                            :
                            <Link to={'/login'}>
                                <button className="btn">Login</button>
                            </Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;