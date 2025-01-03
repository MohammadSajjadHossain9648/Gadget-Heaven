import { NavLink, useNavigate } from 'react-router-dom';
import bannerLogo from '../../assets/banner.jpg';

const Banner = ({children}) => {
    const navigate = useNavigate();

    return (
        <div className="pt-4">
            {/* banner section */}
            <div className="relative mx-4 mb-72 pb-48 lg:pb-52 bg-purple_color outline outline-2 outline-shade_white_color2 outline-offset-4 rounded-2xl">

            {/* navbar section */}
            {children}

            {/* middle section */}
            <div className="text-white_color text-center sm:w-11/12 md:w-5/6 lg:w-3/4 mx-auto mt-10">
                <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-sm mt-5 mb-7 sm:w-11/12 md:w-3/4 mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button onClick={() => navigate('/Dashboard')} className="btn font-bold text-purple_color rounded-full">
                    Shop Now
                </button>
            </div>
            </div>

            {/* last section */}
            <div className="absolute sm:-bottom-72 md:-bottom-72 lg:-bottom-60 sm:left-20 md:left-20 lg:left-40 h-3/4 sm:w-4/5 md:w-5/6 lg:w-3/4 p-4 bg-shade_white_color1 outline outline-2 outline-white_color rounded-3xl">
                <img className="h-full w-full rounded-3xl" src={bannerLogo} alt="banner logo image" />
            </div>
        </div>
    );
};

export default Banner;