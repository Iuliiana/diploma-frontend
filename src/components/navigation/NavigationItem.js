import React from 'react';
import {NavLink} from "react-router-dom";
import propTypes from "prop-types";

const NavigationItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={props.path}>{props.title}</NavLink>
        </li>
    );
};

NavigationItem.propTypes = {
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    path: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default NavigationItem;