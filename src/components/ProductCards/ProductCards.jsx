import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { PiSmileySad } from 'react-icons/pi';

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
        <>
            {
                (gadgetProducts.length > 0) ?
                    (
                    <div className="sm:w-full md:w-3/4 h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            gadgetProducts.map((gadgetProduct, index) => <ProductCard key={index} gadgetProduct={gadgetProduct}></ProductCard>)
                        }
                    </div>
                    )  :
                    (
                    <div>
                        <div className="text-center bg-white p-8 w-full h-full flex flex-col items-center justify-center rounded-xl">
                            <PiSmileySad className="h-32 w-32" />
                            <h2 className="text-2xl font-bold text-dark_blue_color m-4">
                                No Products Available
                            </h2>
                            <p className="w-3/4 text-shade_dark_blue_color_2">
                                We're sorry, but it looks like we don't have any products to display at the moment.
                            </p>
                        </div>
                    </div>
                    )
            }
      </>
    );
};

export default ProductCards;