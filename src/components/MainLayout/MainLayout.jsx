import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const MainLayout = () => {
    const location = useLocation();
    const isHomePage = (location.pathname === '/');

    return (
        <div className="text-black_color font_sora bg-gray-100">
            {/* navbar or home header section */}
            {
                isHomePage ?
                (<Banner>
                    <Navbar></Navbar>
                </Banner>) :
                (<Navbar></Navbar>)
            }

            {/* content section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;