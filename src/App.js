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
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignIn from './components/Login/SignIn';

function App() {
  return (
      <Router>
        <div className="App">
        <Switch>
          <Route path="/food/:foodId">
            <Header></Header>
            <FoodDetail></FoodDetail>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <BgImages></BgImages>
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/signin">
            <Header></Header>
            <SignIn></SignIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
