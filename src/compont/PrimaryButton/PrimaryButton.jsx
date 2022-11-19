import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn border-none text-white font-semibold bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimaryButton;