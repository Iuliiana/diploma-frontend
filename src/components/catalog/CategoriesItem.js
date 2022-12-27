import React from 'react';
import propTypes from "prop-types";
import {Button} from "../../ui/button/Button";


const CategoriesItem = (props) => {
    const {onClick: handleClick} = props;

    return (
        <li className="nav-item">
            <Button className={`nav-link nav-button ${props.isCurrent ? 'active' : ''}`}
                    onClick={() => handleClick(props.id)}>{props.title}</Button>
        </li>
    );
};

CategoriesItem.propTypes = {
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    title: propTypes.string.isRequired,
}

export default CategoriesItem;