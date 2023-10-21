import { key } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const MyCart = (props) => {

    const myCartData = useLoaderData()
    console.log(myCartData);
    
    return (
        
        <div>
                {
                    myCartData?.map( mycart => <Card key={mycart._id} mycart={mycart}>  </Card>)
                }
        </div>
    );
};

export default MyCart;