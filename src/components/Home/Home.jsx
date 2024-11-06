import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Home = () => {
    const location = useLocation();
    const isHomePage = (location.pathname === '/');

    return (
        <div className="text-black_color font_sora">
            {/* header section */}
            {
                isHomePage ?
                (<Header>
                    <Navbar></Navbar>
                </Header>) :
                (<Navbar></Navbar>)
            }

            {/* content section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default Home;