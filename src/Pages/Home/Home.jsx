import { useEffect, useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";

const Home = (props) => {
    const [alldata, setAlldata] = useState([]);

    useEffect(() => {
        fetch('BrandData.json')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])
    return (

        <div>
            <Banner></Banner>
            <Brand></Brand>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-16 p-8 container mx-auto'>
                {
                    alldata.map(brandData =>
                        <div key={brandData.id} className="card card-compact w-72 bg-base-200 shadow-xl" >
                            <Link to={`/${brandData.brandname}`} > <figure><img className="w-[450px] h-[300px]" src={brandData.brandnameImg} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-center">{brandData.brandname}</h2>
                                </div></Link>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;