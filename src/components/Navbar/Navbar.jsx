import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import cart from '../../assets/cart.svg';
import wishlist from '../../assets/wishlist.svg';


const Navbar = () => {
  return (
    <div className="navbar sm:w-11/12 md:w-4/5 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <GiHamburgerMenu />
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 px-4 space-y-4"
                >
                    <NavLink to={'/'} className="text-xs text-Shade_black_color_1">Home</NavLink>
                    <NavLink to={'/Statistics'} className="text-xs text-Shade_black_color_1">Statistics</NavLink>
                    <NavLink to={'/Dashboard'} className="text-xs text-Shade_black_color_1">Dashboard</NavLink>
                </ul>
            </div>
            <h1 className="font-bold">Gadget Heaven</h1>
        </div>
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal space-x-8">
                <NavLink to={'/'} className="text-xs text-Shade_black_color_1">Home</NavLink>
                <NavLink to={'/Statistics'} className="text-xs text-Shade_black_color_1">Statistics</NavLink>
                <NavLink to={'/Dashboard'} className="text-xs text-Shade_black_color_1">Dashboard</NavLink>
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
