import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    const detailsData = useLoaderData()
    console.log(detailsData);

    const {name , brand, price, category , photo, details } = detailsData
    const carts = {name , brand, price, category , photo, details } 
    const handleAddCart = () => {
        fetch('https://e-commerce-based-gmpm8plzf-mrsaifulislam778.vercel.app/carts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carts)
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
                                <img src={photo} className="rounded-xl h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p className="text-4xl">{brand}</p>
                                <p className="text-3xl">{category}</p>
                                <p>{price}</p>
                                <p>{details}</p>
                                <button onClick={handleAddCart} className='btn btn-primary'>add to cart</button>
                               
                            </div>
                        </div>
        </div>
    );
};

export default Details;