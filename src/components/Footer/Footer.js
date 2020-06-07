import React from 'react';
import './Footer.css';
import img from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-img">
                <img src={img} alt=""/>
            </div>
            <nav className="footer-nav">
                <div className="footer-text1">
                    <h6>About Online food</h6>
                    <h6>Read our blog</h6>
                    <h6>Sign up to deliver</h6>
                    <h6>Add your restaurant</h6>
                </div>
                <div className="footer-text2">
                    <h6>Get help</h6>
                    <h6>Read FAQs</h6>
                    <h6>View all cities</h6>
                    <h6>Restaurants near me</h6>
                </div>
            </nav>
            <div className="footer-text3">
                <span className="copy-right"><small>Copyright &copy; 2020 Online food</small></span>
                <h6>Privacy Policy</h6>
                <h6 className="center">Terms of use</h6>
                <h6>Pricing</h6>
            </div>
        </div>
    );
};

export default Footer;