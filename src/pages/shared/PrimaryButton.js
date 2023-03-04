import React from 'react';

const PrimaryButton = ({text}) => {
    return (
        <button className="btn outline-none bg-gradient-to-r from-cyan-500 to-blue-500 text-bold uppercase text-white">{text}</button>
    );
};

export default PrimaryButton;