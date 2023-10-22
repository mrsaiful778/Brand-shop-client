
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const MyCart = (props) => {

    const mycartLoadedData = useLoaderData()
    const [myCartData, setMyCartData] = useState(mycartLoadedData)
    console.log(myCartData);
    
    return (
        
        <div>
                {
                    myCartData?.map( mycart => <Card  myCartData={myCartData} setMyCartData={setMyCartData} key={mycart._id} mycart={mycart}>  </Card>)
                }
        </div>
    );
};

export default MyCart;