import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductCards = () => {
    const products = useLoaderData();

    return (
        <div className="sm:w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;