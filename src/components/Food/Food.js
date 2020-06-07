import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {title, subtitle, price, img, id} = props.food;
    return (
        <div className="col-lg-4">
            <div className="food">
                <Link to={"/food/"+id}>
                    <img src={img} alt=""/>
                    <p><b>{title}</b></p>
                    <p>{subtitle}</p>
                    <p>${price}</p>
                </Link>
            </div>
        </div>
    );
};

export default Food;