import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Amazon = () => {
    const amazonData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = amazonData.filter(amazon => amazon.brand == 'amazon')
        setDeatials(aData)
    }, [])
    return (

        <div className="">
            
            <div>
                <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/g6TDrp2/Apple-Watch-Evolution-2016-2020.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Tr16NTy/28628-44931-apple-watch-black-friday.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QP6KFzC/get-apple-watch-series-4.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Yc01qwj/apple-watch.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
            </div>
            <h2 className='text-center py-10 text-6xl font-extralight'>Amazon</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-5 text-center container mx-auto">
                {
                    details.map(detail => <div key={detail._id}>
                        <div className="card h-[800px] bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={detail.photo} className="rounded-xl h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{detail.name}</h2>
                                <p className="text-4xl">Brand: {detail.brand}</p>
                                <p className="text-3xl">Product: {detail.category}</p>
                                <p>Price: {detail.price}</p>
                                <p>Description: {detail.details}</p>
                                <div className="card-actions flex gap-5">
                                <Link to={`/details/${detail._id}`}> <button className="btn btn-primary"> Details</button></Link>
                                    <Link to={`/update/${detail._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                               
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Amazon;