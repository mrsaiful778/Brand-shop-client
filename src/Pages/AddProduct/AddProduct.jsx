import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = (props) => {

    const createProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const brand = form.get('brand')
        const category = form.get('category')
        const price = form.get('price')
        const details = form.get('details')
        const photo = form.get('photo')
        console.log(name, brand, category, price, details, photo);

        const cProduct = { name, brand, category, price, details, photo }
        console.log(cProduct);
        fetch('https://e-commerce-based-gmpm8plzf-mrsaifulislam778.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            if(data.insertedId){
                toast("Product added successfully!");
            }
            })
    }


    return (

        <div>
            <div className="bg-[#F4F3F0] p-24 ">
                <h2 className="text-3xl font-extrabold"> Add Product </h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={createProduct} >
                    <div className="md:flex ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand </span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="brand" placeholder="Brand name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type of product</span>
                            </label>
                            <label className="input-group h-auto">
                                <select name='category' className="w-full p-3">
                                    <option disabled >Pick a type</option>
                                    <option>Smart-watch</option>
                                    <option>Phone</option>
                                    <option>perfume</option>
                                    <option>bodySpray</option>
                                    <option>Camera</option>
                                    <option>laptop</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <div className="mb-8">
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <textarea type="text" name="details" placeholder="details" className="textarea textarea-bordered w-full"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-[#D2B48C] text-bg-[#331A15]" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;