import React from 'react';
import { PiSlidersBold } from 'react-icons/pi';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';

const DashboardCards = () => {
    const listProducts = useLoaderData();

    const location = useLocation();
    const isCartPage = (location.pathname === '/Dashboard/Cart');

    return (
        <div className="sm:w-11/12 md:w-4/5 mx-auto mt-10 mb-40">
            {/* body header section */}
            <div className={`mb-7 ${isCartPage ? "md:flex md:items-center md:justify-between" : ""}`}>
                <h1 className="text-xl font-bold">{isCartPage ? "Cart" : "Wishlist"}</h1>
                {
                    isCartPage ?
                    (
                        <div className={`space-x-3 ${isCartPage ? "flex items-center justify-between" : ""}`}>
                            <h1 className="text-xl font-bold mr-2">Total cost: 999.99</h1>
                            <button className="text-purple_color font-semibold px-4 py-2 border border-purple_color rounded-3xl flex items-center">
                                Sort by Price
                                <PiSlidersBold className='ml-2'/>
                            </button>
                            <button className="text-white_color font-medium bg-purple_color px-5 py-2 rounded-3xl">
                                Purchase
                            </button>
                        </div>
                    )
                    : ("")
                }
            </div>

            {/* cart section */}
            <div className="space-y-5">
                {
                    listProducts.map((listProduct, index) => <ProductList key={index} listProduct={listProduct}></ProductList>)
                }
            </div>
        </div>
    );
};

export default DashboardCards;