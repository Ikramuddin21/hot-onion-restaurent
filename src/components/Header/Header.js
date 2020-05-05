import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header fixed-top text-center">
            <div className="header-area row">
                <img src={logo} alt=""/>
            </div>
            <div className="nav-area">
                <nav>
                    <button className="cart"><FontAwesomeIcon icon={faCartPlus} /></button>
                    <button className="log-in">Log in</button>
                    <button className="signUp-btn bg-danger">Sign up</button>
                </nav>
            </div>
        </div>
    );
};

export default Header;