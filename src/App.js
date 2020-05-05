import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BgImages from './components/BgImages/BgImages';
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodDetail from './components/FoodDetail/FoodDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BgImages></BgImages>
      <Router>
        <HomePage></HomePage>
        <Switch>
          <Route path="/Food/:Foodid">
            <FoodDetail></FoodDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
