import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = ( {children} ) => {
    const categories = useLoaderData();

    return (
        <div>
            <div className="pt-4 ">
                {/* banner or header section */}
                <Banner children={children}></Banner>

                {/* gadgets section */}
                <Gadgets categories={categories}></Gadgets>
            </div>
            {/* content section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;