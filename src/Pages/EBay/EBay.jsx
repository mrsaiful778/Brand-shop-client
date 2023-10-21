import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const EBay = (props) => {
    const EBayData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = EBayData.filter(eBay => eBay.brand == 'EBay')
        setDeatials(aData)
    }, [])
    return (

        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/qyvvzDN/240-BOSS-OUD-1200x500-PX-WEB-BANNER.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/yqKDKs0/French-Essence32947.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/xHMJY9J/Clinique-Happy-Perfume-Spray-1-7fl-oz-50m-Spray.webp" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/RYChHqm/maxresdefault-1.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='py-10 text-6xl text-center font-extralight'>eBay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-5 text-center container mx-auto">
                {
                    details.map(detail => <div key={detail._id}>
                        <div className="card h-[800px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <img src={detail.photo} alt="Shoes" className="rounded-xl h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                                <h2 className="card-title">{detail.name}</h2>
                                <p className="text-4xl">{detail.brand}</p>
                                <p className="text-3xl">{detail.category}</p>
                                <p>{detail.price}</p>
                                <p>{detail.details}</p>
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

export default EBay;