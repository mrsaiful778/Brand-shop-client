import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';


const Main = (props) => {
    return (

        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;