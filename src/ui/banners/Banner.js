import React from 'react';
import classes from "../input/Input.module.css";
import propTypes from "prop-types";

const Banner = (props) => {
    const propsClasses = (!!props.className) ? props.className.split(' ').map(className => classes[className]).join(' ') : '';

    return (
        <div className={`banner ${propsClasses}`}>
            <img src={props.imgUrl} className="img-fluid" alt={props.title}/>
            <h2 className="banner-header">{props.title}</h2>
        </div>
    );
};

Banner.propTypes = {
    className: propTypes.string,
    imgUrl: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default Banner;