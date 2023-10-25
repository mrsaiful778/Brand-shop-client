
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [detailsInfo, setDetailsInfo] = useState({})
    const { id } = useParams();
    const loadData = useLoaderData();

    useEffect(() => {
        const findData = loadData.find(item => item._id == id);
        setDetailsInfo(findData);
    }, [id, loadData]);
    console.log(detailsInfo)
    const sendData = {
        photo: detailsInfo.photo,
        name: detailsInfo.name,
        price: detailsInfo.price,
        description: detailsInfo.description,
        category: detailsInfo.category,
    }
    const handleAddCart = () => {
        fetch('https://e-commerce-based.vercel.app/carts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Product added successfully!");
                }
            })
    }
    return (

        <div>
            <div className="card h-[800px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={detailsInfo.photo} className="rounded-xl h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{detailsInfo.name}</h2>
                    <p className="text-4xl">{detailsInfo.brand}</p>
                    <p className="text-3xl">{detailsInfo.category}</p>
                    <p>Price:{detailsInfo.price}</p>
                    <p>{detailsInfo.details}</p>
                    <button onClick={handleAddCart} className='btn btn-primary'>add to cart</button>

                </div>
            </div>
        </div>
    );
};

export default Details;