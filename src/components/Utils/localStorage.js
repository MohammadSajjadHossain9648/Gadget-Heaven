import { toast } from "react-toastify";

// cart section
// check -> local storage is empty or not
const checkCartStorage = () => {
    const cartLocalStorage = localStorage.getItem(`cart`);
    // if local storage is not empty, convert local storage JSON string to JS object and return it. Otherwise return an empty array
    if(cartLocalStorage){
        return JSON.parse(cartLocalStorage);
    }
    return [];
}

// add cart product in local storage
const addCartToLS = (product) => {
    const cartData = checkCartStorage();
    const isExist = cartData.find(cart => cart.product_id === parseInt(product.product_id));

    // if product is already in local storage
    if(isExist || !product.availability){
        localStorage.setItem(`cart`, JSON.stringify(cartData));
        return ;
    }
    // add product to local storage
    cartData.push(product);
    localStorage.setItem(`cart`, JSON.stringify(cartData));
    toast.success(`"${product.product_title}" added successfully in the cart!`, {
        position: "top-center",
        autoClose: 3000,
    });
}

// remove cart product in local storage
const removeCartFromLS = (product) => {
    const cartData = checkCartStorage();
    const remainingCart = cartData.filter(cart => cart.product_id !== parseInt(product.product_id));

    // if product is available, add it to local storage again
    localStorage.setItem(`cart`, JSON.stringify(remainingCart));
    toast.error(`"${product.product_title}" has been removed successfully from the cart.`, {
        position: "top-center",
        autoClose: 3000,
    });
}




// wishlist section
// check -> local storage is empty or not
const checkWishlistStorage = () => {
    const wishlistLocalStorage = localStorage.getItem(`wishlist`);
    // if local storage is not empty, convert local storage JSON string to JS object and return it. Otherwise return an empty array
    if(wishlistLocalStorage){
        return JSON.parse(wishlistLocalStorage);
    }
    return [];
}

// add Wishlist product in local storage
const addWishlistToLS = (product) => {
    const wishlistData = checkWishlistStorage();
    const isExist = wishlistData.find(wishlist => wishlist.product_id === parseInt(product.product_id));

    // if product is already in local storage
    if(isExist){
        localStorage.setItem(`wishlist`, JSON.stringify(wishlistData));
        return ;
    }
    // add product to local storage
    wishlistData.push(product);
    localStorage.setItem(`wishlist`, JSON.stringify(wishlistData));
    toast.success(`"${product.product_title}" added successfully in the wishlist!`, {
        position: "top-center",
        autoClose: 3000,
    });
}

// remove Wishlist product in local storage
const removeWishlistFromLS = (product) => {
    const wishlistData = checkWishlistStorage();
    const remainingWishlist = wishlistData.filter(wishlist => wishlist.product_id !== parseInt(product.product_id));

    // if product is available, add it to local storage again
    localStorage.setItem(`wishlist`, JSON.stringify(remainingWishlist));
    toast.error(`"${product.product_title}" has been removed successfully from the wishlist.`, {
        position: "top-center",
        autoClose: 3000,
    });
}





// total price section
// check -> local storage is empty or not
const checkTotalPrice = () => {
    const priceLocalStorage = localStorage.getItem(`total_price`);
    // if local storage is not empty, convert local storage JSON string to JS object and return it. Otherwise return an empty array
    if(priceLocalStorage){
        return JSON.parse(priceLocalStorage);
    }
    return 0;
}

// add Wishlist product in local storage
const addPriceToLS = (price) => {
    const priceData = checkTotalPrice();

    const updatedPrice = priceData + price;
    localStorage.setItem(`total_price`, JSON.stringify(updatedPrice));
}

// remove Wishlist product in local storage
const removePriceFromLS = (price) => {
    const priceData = checkTotalPrice();

    const updatedPrice = priceData - price;
    localStorage.setItem(`total_price`, JSON.stringify(updatedPrice));
}




export { checkCartStorage, addCartToLS, removeCartFromLS, checkWishlistStorage, addWishlistToLS, removeWishlistFromLS, checkTotalPrice, addPriceToLS, removePriceFromLS };