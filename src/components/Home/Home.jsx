import { useLoaderData } from 'react-router-dom';
import Gadgets from '../Gadgets/Gadgets';

const Home = ( {children} ) => {
    const categories = useLoaderData();

    return (
        <div>
            {/* gadgets section */}
            <Gadgets categories={categories}></Gadgets>
        </div>
    );
};

export default Home;