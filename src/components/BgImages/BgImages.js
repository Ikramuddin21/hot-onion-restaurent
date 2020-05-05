import React from 'react';
import './BgImages.css';

const BgImages = () => {
    return (
        <div className="bg-images row text-center">
                <div className="container align-self-center">
                    <h1>Best food waiting for your belly</h1>
                    <input type="text" placeholder="Search food items"/>
                    <button className="bg-danger">Search</button>
                </div>
        </div>
    );
};

export default BgImages;