import React, { useState, useEffect } from 'react';
import Food from '../Food/Food';
import fakeData from '../../fakeData/foodData'
import './HomePage.css';
import chooseInfo from '../../fakeData/choose';
import ChooseItem from '../ChooseItem/ChooseItem';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const [foods, setFoods] = useState(fakeData);
    const [catagory, setCatagory] = useState("Lunch");
    const [choose, setChoose] = useState(chooseInfo);

    useEffect(() => {
        setFoods(foods);
    },[foods]);
    const selectFood = foods.filter(food => food.catagories === catagory);
    return (
        <div className="food-container">
            <nav className="my-3">
                <ul className="nav justify-content-center">
                    <li className="nav-item m-2" onClick={() => setCatagory("Breakfast")}>
                        <span className={catagory === "Breakfast" ? "active p" : "p"}>Breakfast</span>
                    </li>
                    <li className="nav-item m-2" onClick={() => setCatagory("Lunch")}>
                        <span className={catagory === "Lunch" ? "active p" : "p"}>Lunch</span>
                    </li>
                    <li className="nav-item m-2" onClick={() => setCatagory("Dinner")}>
                        <span className={catagory === "Dinner" ? "active p" : "p"}>Dinner</span>
                    </li>
                </ul>
            </nav>
            <div className="row">
                {
                    selectFood.map(food => <Food 
                        key={food.id} 
                        food={food}>
                    </Food>)
                }
            </div>

            <div className="check-out">
                <button>CheckOut Your Food</button>
            </div>

            <div className="choose-area-top">
                <h2>Why you choose us</h2>
                <h6>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</h6>
            </div>
            
            <div className="choose-area">
                {
                    choose.map(choose => <ChooseItem choose={choose}></ChooseItem>)
                }
            </div>
            
            <div>
                <Footer></Footer>
            </div>
            

        </div>
    );
};

export default HomePage;