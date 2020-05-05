import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {title, subtitle, price, img, id} = props.food;
    return (
        <div className="food col-md-12 col-lg-4">
            <Link to={"/Food/"+id}>
                <img src={img} alt=""/>
                <p><b>{title}</b></p>
                <p>{subtitle}</p>
                <p>${price}</p>
            </Link>
        </div>
    );
};

export default Food;