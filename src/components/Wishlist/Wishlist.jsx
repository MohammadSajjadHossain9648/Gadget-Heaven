import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {
    const wishlistData = useLoaderData();
    const{ product_id, product_title, product_image, description } = wishlistData;

    return (
        <div>

        </div>
    );
};

export default Wishlist;