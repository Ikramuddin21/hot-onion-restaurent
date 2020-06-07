import React from 'react';
import './ChooseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const ChooseItem = (props) => {
    const {title, detailes, img} = props.choose;
    console.log(props)
    return (
        <div className="choose">
            <div className="row">
                <div className="col-lg-4">
                    <div className="image-area">
                        <img src={img} alt=""/>
                    </div>
                    <div className="text-area">
                        <h4>{title}</h4>
                        <h6>{detailes}</h6>
                        <button className="button">See more <FontAwesomeIcon style={{color:'green', opacity:'0.7'}} icon={faArrowAltCircleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseItem;