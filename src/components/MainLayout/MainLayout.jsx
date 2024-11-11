import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout = () => {
    const location = useLocation();
    const isHomePage = (location.pathname === '/');

    return (
        <div className="text-black_color font_sora bg-gray-100">
            {/* navbar section */}
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

export default MainLayout;