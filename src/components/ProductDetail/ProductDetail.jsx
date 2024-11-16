import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../Heading/Heading';
import StarRatings from 'react-star-ratings';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { addCartToLS, addPriceToLS, addWishlistToLS, checkCartStorage, checkWishlistStorage } from '../Utils/localStorage';


const ProductDetail = () => {
    const location = useLocation();
    const {gadgetProduct} = location.state;

    const{ product_id, product_title, product_image, price, description, Specification, availability, rating } = gadgetProduct;


    // "add to card" button disable functionality
    const [cardBtnActive, setCardBtnActive] = useState(false);
    useEffect(() => {
        // Check if the product is already in the cart when we open the product detail page each time.
        const cartData = checkCartStorage();
        const isExist = cartData.find(cart => cart.product_id === parseInt(gadgetProduct.product_id));
        if(isExist || !gadgetProduct.availability){
            setCardBtnActive(true);
        }
    }, [gadgetProduct])

    // Add the product in the local storage
    const handleToAddCart = (gadgetProduct) => {
        addCartToLS(gadgetProduct);
        setCardBtnActive(true);
        addPriceToLS(gadgetProduct.price);
    }


    // "wishlist" button disable functionality
    const [wishlistBtnActive, setWishlistBtnActive] = useState(false);

    useEffect(() => {
        // Check if the product is already in the wishlist when we open the product detail page each time.
        const wishlistData = checkWishlistStorage();
        const isExist = wishlistData.find(wishlist => wishlist.product_id === parseInt(gadgetProduct.product_id));
        if(isExist){
            setWishlistBtnActive(true);
        }
    }, [gadgetProduct])

    const handleToAddWishlist = (product) => {
        addWishlistToLS(product);
        setWishlistBtnActive(true);
    }

    return (
        <div className="relative">
            {/* header section */}
            <div className="bg-purple_color pt-6 sm:pb-80 md:pb-48 mb-96">
                <Heading title={"Product Details"} subtitle={"Get all the essential info on each gadget, including specifications, rating, price etc, for easy and informed shopping."} ></Heading>
            </div>

            {/* product details section */}
            <div className="absolute top-32 sm:left-24 md:left-32 sm:w-3/4 md:w-4/5 p-6 bg-white_color border border-2xl rounded-3xl grid sm:grid-cols-1 md:grid-cols-custom sm:gap-3 md:gap-7">
                <figure className="flex items-center justify-center">
                    <img className="sm:h-40 md:h-60" src={product_image} alt="product image" />
                </figure>
                <div className="space-y-3">
                    <h1 className="text-2xl font-semibold text-dark_blue_color">{product_title}</h1>
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
                            Specification.map((specify, index)=> <li key={index} className="ml-4 list-decimal text-sm text-shade_dark_blue_color_2">{specify}</li>)
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
                        <button disabled={cardBtnActive} onClick={() => handleToAddCart(gadgetProduct)} className={`px-4 py-2 text-sm font-bold text-white_color border rounded-full bg-purple_color flex justify-between items-center ${(availability) ? "" : "cursor-not-allowed"}`}>
                            Add To Card
                            <HiOutlineShoppingCart className="ml-2" />
                        </button>
                        <button disabled={wishlistBtnActive} onClick={() => handleToAddWishlist(gadgetProduct)} className="ml-2 p-3 border border-black_bg_color rounded-full bg-white_color text-favicon_color">
                            <FiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;