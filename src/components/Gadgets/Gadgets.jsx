import { NavLink } from "react-router-dom"

const Gadgets = ( {categories} ) => {
    return (
        <div className="mt-80 mb-20 sm:w-11/12 md:w-4/5 mx-auto">
            <h1 className="text-3xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>

            <div className="mt-10">
                <div className="w-1/4 p-5 bg-white_color grid grid-cols-1 gap-5">
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">All Product</NavLink>
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">computers</NavLink>
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">phones</NavLink>
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">smart watches</NavLink>
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">chargers</NavLink>
                    <NavLink to="#a" className="px-8 py-4 font-medium bg-dark_blue_bg_color rounded-full active:text-white_color active:font-extrabold active:bg-purple_color">power
                    banks</NavLink>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default Gadgets;