import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Flipkart = (props) => {
    const FlipkartData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = FlipkartData.filter(Flipkart => Flipkart.brand == 'Flipkart')
        setDeatials(aData)
    }, [])
    return (
        
        <div>
            <h2>flipkart</h2>
            <div>slider</div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5 text-center container mx-auto">
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
        </div>
    );
};

export default Flipkart;