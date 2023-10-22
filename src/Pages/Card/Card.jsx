import React from 'react';

const Card = ({mycart, myCartData, setMyCartData}) => {

    const {_id , name , brand, price, category , photo, details} = mycart;
    console.log(mycart);
    
    const handleDeleteCart= (id ) => {
        fetch(`https://e-commerce-based.vercel.app/carts/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
                                <button onClick={() => handleDeleteCart(_id)} className='btn btn-primary'>Delete</button>
                               
                            </div>
                        </div>
        </div>
    );
};

export default Card;