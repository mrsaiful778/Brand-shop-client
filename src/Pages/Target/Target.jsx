import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Target = (props) => {
    const targetData = useLoaderData()
    const [details, setDeatials] = useState([]);
    useEffect(() => {
        const aData = targetData.filter(target => target.brand == 'Target')
        setDeatials(aData)
    }, [])
    return (
        
        <div>
            <h2 className='py-10 text-6xl font-extralight'>Target</h2>
            <div>slider</div>
            <div>
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
        </div>
    );
};

export default Target;