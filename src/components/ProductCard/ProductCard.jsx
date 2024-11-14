import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductCard = ({ gadgetProduct }) => {
    const{ product_id, product_title, product_image, price } = gadgetProduct;

    const navigate = useNavigate();
    const handleToViewDetails = (gadgetProduct) => {
        // Navigate to ProductDetail and pass gadgetProduct as state
        navigate( `/productDetail/${product_id}`, {state: {gadgetProduct}} );
    }

    return (
        <div className='p-4 bg-white_color border rounded-xl'>
            <img className='sm:h-60 md:h-40 mx-auto rounded-xl' src={product_image} alt="product image" />
            <div className="pt-4 space-y-2">
                <h1 className="text-lg font-semibold text-dark_blue_color">{product_title}</h1>
                <p className="font-medium text-shade_dark_blue_color_2">Price: ${price}</p>
                <button onClick={() => handleToViewDetails(gadgetProduct)} className="text-purple_color font-semibold px-4 py-2 border border-purple_color rounded-3xl">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;