import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className="sm:w-3/4 md:w-1/2 mx-auto text-center">
            <h1 className="text-2xl font-bold text-white_color mb-3">{title}</h1>
            <p className="text-xs text-white_color">{subtitle}</p>
        </div>
    );
};

export default Heading;