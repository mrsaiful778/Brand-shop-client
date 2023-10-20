import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Amazon = () => {
    const amazonData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = amazonData.filter(amazon => amazon.brand == 'amazon')
        setDeatials(aData)
    }, [])
    return (

        <div className="">
            <h2>Amazon</h2>
            <div>
                slider 
                <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sgqCz9z/download4.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/hKP6fjr/images3.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/1mkbHH8/images-2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/pdzKxx6/images.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols space-y-5 text-center container mx-auto">
                {
                    details.map(detail => <div key={detail._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={detail.photo} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{detail.name}</h2>
                                <p className="text-4xl">{detail.brand}</p>
                                <p className="text-3xl">{detail.category}</p>
                                <p>{detail.price}</p>
                                <p>{detail.details}</p>
                                <div className="card-actions flex gap-5">
                                    <button className="btn btn-primary"> Details</button>
                                    <button className="btn btn-primary">Update</button>
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