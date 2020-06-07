import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
        const {title, detailes, img, price} = props.food;
        // console.log(props)
    return (
        <div className="food-item">
            <div className="food-text">
                <h1>{title}</h1>
                <br/>
                <p>{detailes}</p>
                <br/>
                <h2>${price}</h2>
                <div className="added-button"> 
                    <button onClick={props.handlePlusbutton}>+</button>
                    <input type="text" value="1"/>
                    <button onClick={props.handleMinusbutton}>-</button>
                </div>
            </div>
            <div>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default FoodItem;