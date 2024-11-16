import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    // dynamic title for each page
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);


    const products = useLoaderData();

    return (
        <div>

        </div>
    );
};

export default Statistics;