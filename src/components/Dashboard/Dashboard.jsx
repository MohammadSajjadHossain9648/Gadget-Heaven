import React from 'react';
import Heading from '../Heading/Heading';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const isCartPage = (location.pathname === '/Dashboard/Cart');
    const isWishlistPage = (location.pathname === '/Dashboard/Wishlist');

    return (
        <div>
            {/* header section */}
            <div className="bg-purple_color py-6">
                <Heading title={"Dashboard"} subtitle={"The dashboard lets you quickly access your cart and wishlist, along with key product stats and insights, for efficient management of your shopping experience."} ></Heading>
                <div className="mt-7 flex justify-center">
                    <NavLink to={`/Dashboard/Cart`} className={`text-sm px-12 py-2 mr-5 rounded-full ${isCartPage ? "text-purple_color font-extrabold bg-white_color" : "text-white_color font-medium border border-white_color"}`}>Cart</NavLink>
                    <NavLink to={`/Dashboard/Wishlist`} className={`text-sm px-12 py-2 rounded-full ${isWishlistPage ? "text-purple_color font-extrabold bg-white_color" : "text-white_color font-medium border border-white_color"}`}>Wishlist</NavLink>
                </div>
            </div>

            {/* content section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;