import { FiHeart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = ({ homePageStatus }) => {
    const location = useLocation();
    const isStatisticsPage = (location.pathname === '/Statistics');
    const isDashboardPage = (location.pathname === '/Dashboard' || location.pathname === '/Dashboard/Cart' || location.pathname === '/Dashboard/Wishlist');
    const isAboutUsPage = (location.pathname === '/AboutUs');

    return (
        <div className={`navbar mx-auto px-0 ${homePageStatus ? "w-11/12" : "sm:w-11/12 md:w-4/5"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn btn-ghost md:hidden ${homePageStatus ? "text-white" : ""}`}>
                        <GiHamburgerMenu />
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content rounded-box z-[1] backdrop-blur-md mt-3 w-40 px-4 space-y-4 ${homePageStatus ? "bg-purple_color border border-white" : "bg-dark_blue_bg_color"}`}
                    >
                        <NavLink to={'/'} className={`text-lg ${homePageStatus ? "text-white_color" : ""}`}>Home</NavLink>
                        <NavLink to={'/Statistics'} className={`text-lg ${homePageStatus ? "text-white_color" : ""}`}>Statistics</NavLink>
                        <NavLink to={'/Dashboard'} className={`text-lg ${homePageStatus ? "text-white_color" : ""}`}>Dashboard</NavLink>
                        <NavLink to={'/AboutUs'} className={`text-lg ${homePageStatus ? "text-white_color" : ""}`}>AboutUs</NavLink>
                    </ul>
                </div>
                <h1 className={`${homePageStatus ? "text-white_color font-bold" : "font-bold"}`}>Gadget Heaven</h1>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal space-x-8">
                    <NavLink to={'/'} className={`text-xs ${homePageStatus ? "font-bold text-white_color" : "text-Shade_black_color_1"}`}>Home</NavLink>
                    <NavLink to={'/Statistics'} className={`text-xs ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"} ${isStatisticsPage ? "font-bold text-purple_color" : ""}`}>Statistics</NavLink>
                    <NavLink to={'/Dashboard'} className={`text-xs ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"} ${isDashboardPage ? "font-bold text-purple_color" : ""}`}>Dashboard</NavLink>
                    <NavLink to={'/AboutUs'} className={`text-xs ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"} ${isAboutUsPage ? "font-bold text-purple_color" : ""}`}>AboutUs</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/Dashboard/Cart'} className="p-2 border border-Shade_black_color_2 rounded-full bg-white_color ">
                    <HiOutlineShoppingCart />
                </Link>
                <Link to={'/Dashboard/Wishlist'} className="ml-2 p-2 border border-Shade_black_color_2 rounded-full bg-white_color text-favicon_color">
                    <FiHeart />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
