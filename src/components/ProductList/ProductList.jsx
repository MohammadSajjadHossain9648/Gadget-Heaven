import React, { useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { checkCartStorage } from '../Utils/localStorage';


const ProductList = ({ listProduct, handleToAddCart, handleToRemoveProduct }) => {
    const{ product_id, product_title, product_image, price, description } = listProduct;

    const location = useLocation();
    const isCartPage = (location.pathname === '/Dashboard/Cart');

    // "add to card" button disable functionality
    const [cardBtnActive, setCardBtnActive] = useState(false);
    useEffect(() => {
        // Check if the product is already in the cart when we open the product detail page each time.
        const cartData = checkCartStorage();
        const isExist = cartData.find(cart => cart.product_id === parseInt(listProduct.product_id));
        if(isExist || !listProduct.availability){
            setCardBtnActive(true);
        }
    }, [listProduct])


    return (
        <div className={`grid ${isCartPage ? "sm:grid-cols-customCart2 md:grid-cols-customCart1" : "sm:grid-cols-customWishlist2 md:grid-cols-customWishlist1"} gap-7 p-7 items-center bg-white_color rounded-xl`}>
            <figure className="flex items-center justify-center">
                <img className={`${isCartPage ? "sm:h-36 md:h-24" : "h-40"}`} src={product_image} alt="product image" />
            </figure>
            <div className={`flex justify-between ${isCartPage ? "sm:w-5/6 md:w-11/12" : ""}`}>
                <div className="space-y-3">
                    <h1 className="text-xl font-semibold text-dark_blue_color">{product_title}</h1>
                    <p className="text-sm text-shade_dark_blue_color_2"><span className={`${isCartPage ? "hidden" : "font-semibold text-dark_blue_color"}`}>Description: </span>{description}</p>
                    <p className="font-semibold text-shade_dark_blue_color_1">Price: $ {price}</p>
                    {
                        isCartPage ?
                        (" ") :
                        (
                            <button disabled={cardBtnActive} onClick={() => handleToAddCart(listProduct)} className="text-white_color font-medium bg-purple_color px-5 py-2 rounded-3xl">
                                Add to Card
                            </button>
                        )
                    }
                </div>
                <button onClick={() => handleToRemoveProduct(listProduct)} className="h-6 flex">
                    <RxCrossCircled className="text-red_color_2 h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default ProductList;