import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ComposedChart, Bar, Area,Scatter, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import Heading from '../Heading/Heading';


const Statistics = () => {
    // dynamic title for each page
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    const products = useLoaderData();
    const chartData = products.map((product) => ({
        name: product.product_title,
        price: product.price,
        rating: product.rating,
    }));


    return (
        <div>
            {/* header section */}
            <div className="bg-purple_color py-6">
                <Heading title={"Statistics"} subtitle={"Offers a clear and interactive visualization of product prices and ratings, enabling users to easily compare gadgets and make well-informed purchasing decisions."} ></Heading>
            </div>

            {/* content section */}
            <div className="my-32">
                <ResponsiveContainer width="100%" height={440}>
                    <ComposedChart
                        data={chartData}
                        margin={{ top: 20, right: 20, bottom: 92, left: 20 }}
                    >
                        <CartesianGrid stroke="rgb(243 244 246)" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-30} textAnchor="end" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        {/* Bar for Price */}
                        <Bar dataKey="price" barSize={20} fill="rgb(149, 56, 226)" />

                        {/* Area for Price */}
                        <Area type="monotone" dataKey="price" fill="#b59df6" stroke="#7f47dd" />

                        {/* Scatter for Rating */}
                        <Scatter dataKey="rating" fill="rgb(156, 8, 8)" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;