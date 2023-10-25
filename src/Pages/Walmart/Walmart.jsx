import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NoCard from '../NoCard/NoCard';
import Rating from 'react-rating';

const Walmart = () => {
    const walmartData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = walmartData.filter(walmart => walmart.brand == 'Walmart')
        setDeatials(aData)
    }, [walmartData])

    return (

        <div>

            <div className='py-5'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/mStTZ4Q/Walmart4.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Tq3hWvr/walmart3.png" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/WDsFL5X/walmart2.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Gt2RbtZ/Wallmart1.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='py-10 text-6xl text-center font-extralight'>Walmart</h2>
            {
                details.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-5 text-center container mx-auto">
                    {
                        details.map(detail => <div key={detail._id}>
                            <div className="card h-[800px] bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={detail.photo} alt="Shoes" className="rounded-xl h-[300px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{detail.name}</h2>
                                    <p className="text-4xl">Brand: {detail.brand}</p>
                                    <p className="text-3xl">Product: {detail.category}</p>
                                    <div className="">
                                        <p>Price: {detail.price}</p>
                                        <h4 className="text-lg font-semibold text-yellow-600"><Rating
                                            emptySymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                />
                                            </svg>}
                                            fullSymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>}
                                            initialRating={detail.rating}
                                            readonly
                                        />
                                        </h4>
                                    </div>
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
                    :
                    <NoCard></NoCard>
            }
        </div>
    );
};

export default Walmart;