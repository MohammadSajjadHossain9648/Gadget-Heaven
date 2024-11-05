import React from 'react';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="text-black_color font_sora">
            {/* header section */}
            <Navbar></Navbar>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;