import React from 'react';
import fakeData from '../../fakeData/foodData';
import { useParams } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';

const FoodDetail = () => {
    const [prices, setprices] = useState(1);

    const {foodId} = useParams();
    const food = fakeData.find(fd => fd.id === +foodId);
    console.log(food, foodId)

    const handlePlusbutton = () => {
        const newprices = prices + 1;
        setprices(newprices);
        console.log('clicked')
    }
    const handleMinusbutton = () => {
        const newprices = prices - 1;
        setprices(newprices);
        console.log('click')
    }
    
    return (
        <div>
            {
                <FoodItem
                 food={food}
                 handlePlusbutton={handlePlusbutton}
                 handleMinusbutton={handleMinusbutton}
                ></FoodItem>
            }
        </div>
    );
};

export default FoodDetail;