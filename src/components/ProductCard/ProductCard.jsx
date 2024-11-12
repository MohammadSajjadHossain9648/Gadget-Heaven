import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const{ product_id, product_title, product_image, price } = product;

    return (
        <div className='p-4 bg-white_color border rounded-xl'>
            <img className='sm:h-60 md:h-40 mx-auto rounded-xl' src={product_image} />
            <div className="pt-4 space-y-2">
                <h1 className="text-lg font-semibold text-dark_blue_color">{product_title}</h1>
                <p className="font-medium text-shade_dark_blue_color_2">Price: {price}$</p>
                <button className="text-purple_color font-semibold px-4 py-2 border border-purple_color rounded-3xl">
                    <Link>View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;