import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";

const Contact = (props) => {
    return (

        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto' data-aos="zoom-in" data-aos-duration="2000">
                <div className='bg-[#ABCE4E] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                    <SlLocationPin></SlLocationPin>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Location</h1>
                    <p className='text-white font-poppins'>DC Hil Road No 28</p>
                    <p className='font-poppins text-white'>Chattogram - Bangladesh</p>
                </div>
                <div className='bg-[#F55D52] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <FiPhoneCall></FiPhoneCall>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Call Us</h1>
                    <p className='text-white font-poppins'>Phone : 01234567890</p>
                    <p className='font-poppins text-white'>Fax: +622120021998</p>
                </div>
                <div className='bg-[#5B9ACF] p-20 rounded-lg space-y-4'>
                    <div className='bg-white p-3 rounded-full w-[40px] mx-auto'>
                        <HiOutlineMail></HiOutlineMail>
                    </div>
                    <h1 className='text-3xl text-white font-semibold'>Email Us</h1>
                    <p className='text-white font-poppins'>Eventplaner@gmail.com</p>
                    <p className='font-poppins text-white'>Eventplaner@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;