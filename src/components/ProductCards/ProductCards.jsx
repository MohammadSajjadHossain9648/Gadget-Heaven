import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductCards = () => {
    const products = useLoaderData();

    // store the clicked category button text
    const { category = "All Products" } = useParams();

    // filter products based on clicked category
    const [gadgetProducts, setGadgetProducts] = useState([]);

    useEffect(() => {
        if(category !== "All Products"){
            const selectedProducts = products.filter(product => product.category === category);
            setGadgetProducts(selectedProducts);
        }
        else{
            setGadgetProducts(products);

        }
    }, [category, products])

    return (
        <div className="sm:w-full md:w-3/4 h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                gadgetProducts.map((gadgetProduct, index) => <ProductCard key={index} gadgetProduct={gadgetProduct}></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;