import { NavLink, Outlet } from "react-router-dom"

const Gadgets = ( {categories} ) => {
    return (
        <div className="mt-80 mb-20 w-11/12 mx-auto">
            {/* header section */}
            <h1 className="text-3xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>

            {/* container section */}
            <div className="mt-10 flex sm:flex-col md:flex-row gap-5">
                {/* category button section */}
                <div className="sm:w-full md:w-1/3 lg:w-1/4 h-full p-5 bg-white_color flex sm:flex-row sm:flex-wrap md:flex-col justify-center gap-5 rounded-xl">
                    {
                        categories.map((category, index) => (
                            <NavLink to="#"
                            key={index}
                            className={({ isActive }) =>
                              `px-8 py-4 rounded-full ${isActive ? "text-white_color font-extrabold bg-purple_color" : "font-medium bg-dark_blue_bg_color"}`
                            }>{category.category}</NavLink>
                        ))
                    }
                </div>

                {/* gadget's product grid section */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Gadgets;