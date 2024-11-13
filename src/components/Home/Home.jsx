import { useLoaderData, useLocation } from 'react-router-dom';
import Gadgets from '../Gadgets/Gadgets';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Home = ( {children} ) => {
    const location = useLocation();
    const isHomePage = (location.pathname === '/');
    const isCategoryPage = location.pathname.includes("category");
    let homePageStatus = false;
    if(isHomePage || isCategoryPage){
        homePageStatus = true;
    }
    const isProductDetailPage = location.pathname.includes("productDetail");

    const categories = useLoaderData();

    return (
        <div>
            {/* home header section */}
            {
                isProductDetailPage ?
                ("") :
                (<Banner>
                    <Navbar homePageStatus={homePageStatus}></Navbar>
                </Banner>)
            }

            {/* gadgets section */}
            <Gadgets categories={categories}></Gadgets>
        </div>
    );
};

export default Home;