import { useLoaderData, useLocation } from 'react-router-dom';
import Gadgets from '../Gadgets/Gadgets';
import { useEffect } from 'react';

const Home = ( {children} ) => {
    // dynamic title for each page
    useEffect(() => {
        document.title = "Home | Gadget Heaven";
    }, []);


    const categories = useLoaderData();

    return (
        <div>
            {/* gadgets section */}
            <Gadgets categories={categories}></Gadgets>
        </div>
    );
};

export default Home;