import React, { useEffect, useState } from 'react';
import { PiSlidersBold } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import { addCartToLS, addPriceToLS, checkCartStorage, checkTotalPrice, checkWishlistStorage, removeCartFromLS, removePriceFromLS, removeWishlistFromLS } from '../Utils/localStorage';
import { toast } from 'react-toastify';
import ModalComponent from '../ModalComponent/ModalComponent';

const DashboardCards = () => {
    const location = useLocation();
    const isCartPage = (location.pathname === '/Dashboard/Cart');

    const navigate = useNavigate();

    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        const products = checkCartStorage() || [];
        setCartProducts(products);
    }, [])

    const [wishlistProducts, setWishlistProducts] = useState([]);
    useEffect(() => {
        const products = checkWishlistStorage() || [];
        setWishlistProducts(products);
    }, [])


    // sort functionality
    // Simplified check for sorting
    const isSorted = (array, key) => {
        return array.every((prevArr, index) => {
            if(index === 0){
                // Skip the first item
                return true;
            }
            return prevArr[key] >= array[index - 1][key]; // Compare with the previous item
        });
    }

    const [sortBtnActive, setSortBtnActive] = useState(false);
    const handleToSortButton = () => {
        if(cartProducts.length>1  && !isSorted(cartProducts, 'cartProducts.price')) {
            const sortedProducts = [...cartProducts].sort((a, b) => b.price - a.price);
            setCartProducts(sortedProducts);
            toast.success(`Cart sorted successfully!`, {
                position: "top-center",
                autoClose: 3000,
            });
            setSortBtnActive(true);
        }
    }



    // remove functionality
    const handleToRemoveProduct = (listProduct) => {
        const pathName = location.pathname;
        if(pathName === '/Dashboard/Cart'){
            removeCartFromLS(listProduct);
            const products = checkCartStorage();
            setCartProducts(products);
            removePriceFromLS(listProduct.price);
        }
        else{
            removeWishlistFromLS(listProduct);
            const products = checkWishlistStorage();
            setWishlistProducts(products);
        }
    }


    // Add the product in the local storage
    const handleToAddCart = (listProduct) => {
        addCartToLS(listProduct);
        setCartProducts(listProduct);
        addPriceToLS(listProduct.price);
    }



    // price functionality
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const price = checkTotalPrice();
        setTotalPrice(price);
    }, [])

    // purchase functionality
    const [purchaseBtnActive, setPurchaseBtnActive] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleToPurchase = () => {
        setPurchaseBtnActive(true);

        if(totalPrice !== 0){
            localStorage.removeItem("cart");
            setCartProducts([]);
            setModalIsOpen(true);
        }
    }


    return (
        <div className="sm:w-11/12 md:w-4/5 mx-auto mt-10 mb-40">
            {/* body header section */}
            <div className={`mb-7 ${isCartPage ? "md:flex md:items-center md:justify-between" : ""}`}>
                <h1 className="text-xl font-bold">{isCartPage ? "Cart" : "Wishlist"}</h1>
                {
                    isCartPage ?
                    (
                        <div className={`space-x-3 ${isCartPage ? "flex items-center justify-between" : ""}`}>
                            <h1 className="text-xl font-bold mr-2">Total cost: {totalPrice}</h1>
                            <button disabled={sortBtnActive} onClick={handleToSortButton} className="text-purple_color font-semibold px-4 py-2 border border-purple_color rounded-3xl flex items-center">
                                Sort by Price
                                <PiSlidersBold className='ml-2'/>
                            </button>
                            <button disabled={purchaseBtnActive} onClick={handleToPurchase} className="text-white_color font-medium bg-purple_color px-5 py-2 rounded-3xl">
                                Purchase
                            </button>
                        </div>
                    )
                    : ("")
                }
            </div>

            {/* body cards section */}
            <div className="space-y-5">
                {
                    (isCartPage) ?
                    (
                        cartProducts.map((listProduct, index) => <ProductList key={index} listProduct={listProduct} handleToAddCart={handleToAddCart} handleToRemoveProduct={handleToRemoveProduct}></ProductList>)
                    ) :
                    (
                        wishlistProducts.map((listProduct, index) => <ProductList key={index} listProduct={listProduct} handleToAddCart={handleToAddCart} handleToRemoveProduct={handleToRemoveProduct}></ProductList>)
                    )
                }
            </div>

            {/* modal */}
            {
                modalIsOpen && (
                    <ModalComponent isOpen={modalIsOpen}
                    onClose={() => {
                        setModalIsOpen(false);
                        localStorage.removeItem("total_price");
                        setTotalPrice(0);
                        navigate("/");
                    }}
                    totalPrice={totalPrice}
                    ></ModalComponent>
                )
            }
        </div>
    );
};

export default DashboardCards;