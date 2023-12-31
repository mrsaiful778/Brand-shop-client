import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Pages/Footer/Footer';


const Main = () => {
    return (

        <div className='container mx-auto'>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;