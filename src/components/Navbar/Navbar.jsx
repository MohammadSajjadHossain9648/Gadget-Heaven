import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import cart from '../../assets/cart.svg';
import wishlist from '../../assets/wishlist.svg';
import { useLocation } from 'react-router-dom';


const Navbar = ({ homePageStatus }) => {
    const location = useLocation();
    const isStatisticsPage = (location.pathname === '/Statistics');
    const isDashboardPage = (location.pathname === '/Dashboard');

    return (
        <div className={`navbar mx-auto ${homePageStatus ? "w-11/12" : "sm:w-11/12 md:w-4/5"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn btn-ghost md:hidden ${homePageStatus ? "text-white" : ""}`}>
                        <GiHamburgerMenu />
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content rounded-box z-[1] backdrop-blur-md mt-3 w-40 px-4 space-y-4 ${homePageStatus ? "bg-purple_color border border-white" : "bg-dark_blue_bg_color"}`}
                    >
                        <NavLink to={'/'} className={`text-lg ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"}`}>Home</NavLink>
                        <NavLink to={'/Statistics'} className={`text-lg ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"}`}>Statistics</NavLink>
                        <NavLink to={'/Dashboard'} className={`text-lg ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"}`}>Dashboard</NavLink>
                    </ul>
                </div>
                <h1 className={`${homePageStatus ? "text-white_color font-bold" : "font-bold"}`}>Gadget Heaven</h1>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal space-x-8">
                    <NavLink to={'/'} className={`text-xs ${homePageStatus ? "font-bold text-white_color" : "text-Shade_black_color_1"}`}>Home</NavLink>
                    <NavLink to={'/Statistics'} className={`text-xs ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"} ${isStatisticsPage ? "font-bold text-purple_color" : ""}`}>Statistics</NavLink>
                    <NavLink to={'/Dashboard'} className={`text-xs ${homePageStatus ? "text-white_color" : "text-Shade_black_color_1"} ${isDashboardPage ? "font-bold text-purple_color" : ""}`}>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'#'} className="p-2 border border-Shade_black_color_2 rounded-full bg-white_color mr-3">
                    <img src={cart} alt="cart icon image" />
                </Link>
                <Link to={'#'} className="p-2 border border-Shade_black_color_2 rounded-full bg-white_color ">
                    <img src={wishlist} alt="wishlist icon image" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
