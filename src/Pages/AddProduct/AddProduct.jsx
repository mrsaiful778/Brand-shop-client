import React from 'react';

const AddProduct = (props) => {
    return (

        <div>
            <div className="bg-[#F4F3F0] p-24 ">
                <h2 className="text-3xl font-extrabold"> Add Product </h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form >
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
                                <span className="label-text">Type of product </span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="quantity" placeholder="Type of product" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <label className="input-group h-auto">
                            <select className="w-full h-5">
                                <option disabled selected>Pick a brand</option>
                                <option>Flipcart</option>
                                <option>Amazon</option>
                                <option>BestBay</option>
                                <option>EBay</option>
                                <option>Target</option>
                                <option>Walmart</option>
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
                    {/* <div className="md:flex ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Americano" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Espresso with hot water" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div> */}
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
                                <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-bg-[#331A15]" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;