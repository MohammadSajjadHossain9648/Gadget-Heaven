import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Heading from '../Heading/Heading';
import StarRatings from 'react-star-ratings';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';


const ProductDetail = () => {
    const location = useLocation();
    const {gadgetProduct} = location.state;

    const{ product_id, product_title, product_image, price, description, Specification, availability, rating } = gadgetProduct;

    return (
        <div className="relative">
            <div className="bg-purple_color pt-6 sm:pb-80 md:pb-48 mb-96">
                <Heading title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} ></Heading>
            </div>
            <div className="absolute sm:left-20 top-32 md:left-32 w-4/5 p-6 bg-white_color border border-2xl rounded-3xl grid sm:grid-cols-1 md:grid-cols-custom sm:gap-3 md:gap-7">
                <figure className="flex items-center justify-center">
                    <img className="sm:h-40 md:h-60" src={product_image} alt="product image" />
                </figure>
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold text-dark_blue_color">{product_title}</h1>
                    <p className="font-semibold text-shade_dark_blue_color_1">Price: $ {price}</p>
                    {
                        availability ?
                        (<button className="text-xs font-medium text-green_color bg-green_bg_color border border-green_color rounded-3xl py-2 px-3 cursor-text">In Stock</button>) :
                        (<button className="text-xs font-medium text-red_color bg-red_bg_color border border-red_color rounded-3xl py-2 px-3 cursor-text">Out of Stock</button>)
                    }
                    <p className="text-sm text-shade_dark_blue_color_2">{description}</p>
                    <h3 className="text-sm font-bold text-dark_blue_color">Specification:</h3>
                    <ol>
                        {
                            Specification.map(specify => <li className="text-sm text-shade_dark_blue_color_2">{specify}</li>)
                        }
                    </ol>
                    <h3 className="text-sm font-bold text-dark_blue_color">Rating ⭐</h3>
                    <div className="flex">
                        <StarRatings
                            rating={rating}
                            starDimension="20px"
                            starSpacing="2px"
                            starRatedColor="rgb(249, 192, 4)"
                            numberOfStars={5}
                        />
                        <span className="text-xs font-medium text-shade_dark_blue_color_1 bg-dark_blue_bg_color border rounded-3xl py-1 px-3 ml-3">
                            {rating}
                        </span>
                    </div>

                    <div className="flex">
                        <button className={`px-4 py-2 text-sm font-bold text-white_color border rounded-full bg-purple_color flex justify-between items-center ${availability ? "" : "cursor-not-allowed"}`}>
                            <span className='mr-2'>Add To Card</span>
                            <HiOutlineShoppingCart />
                        </button>
                        <button className="ml-2 p-3 border border-black_bg_color rounded-full bg-white_color text-favicon_color">
                            <FiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;