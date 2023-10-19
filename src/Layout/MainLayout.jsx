import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


const Main = (props) => {
    return (

        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;