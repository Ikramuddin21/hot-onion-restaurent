import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header fixed-top text-center">
            <div className="header-area row">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="nav-area">
                <nav>
                    <button className="cart"><FontAwesomeIcon icon={faCartPlus} /></button>
                    <Link to="/login"><button className="log-in">Log in</button></Link>
                    <Link to="/signin"><button className="signUp-btn bg-danger">Sign up</button></Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;