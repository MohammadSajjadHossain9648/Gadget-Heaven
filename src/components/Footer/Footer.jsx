import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-shade_dark_blue_color_2 text-center py-20 bg-white_color">
            <div className="mb-12">
                <h1 className="text-2xl font-bold text-dark_blue_color mb-2">Gadget Heaven</h1>
                <p className="text-sm">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="w-3/5 mx-auto grid sm:grid-cols-1 md:grid-cols-3 sm:gap-8 md:gap-0">
                <div>
                    <h3 className="font-bold text-dark_blue_color mb-2">Services</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to={'#'} className="text-sm">Product Support</Link>
                        <Link to={'#'} className="text-sm">Order Tracking</Link>
                        <Link to={'#'} className="text-sm">Shipping & Delivery</Link>
                        <Link to={'#'} className="text-sm">Returns</Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-dark_blue_color mb-2">Company</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to={'#'} className="text-sm">About Us</Link>
                        <Link to={'#'} className="text-sm">Careers</Link>
                        <Link to={'#'} className="text-sm">Contact</Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-dark_blue_color mb-2">Legal</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to={'#'} className="text-sm">Terms of Service</Link>
                        <Link to={'#'} className="text-sm">Privacy Policy</Link>
                        <Link to={'#'} className="text-sm">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;