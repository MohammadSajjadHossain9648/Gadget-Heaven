import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = ( {children} ) => {
    const categories = useLoaderData();

    return (
        <div>
            {/* gadgets section */}
            <Gadgets categories={categories}></Gadgets>

            {/* content section */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;