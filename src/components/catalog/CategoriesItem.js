import React from 'react';
import propTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/slices/filterSlice";


const CategoriesItem = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setFilter({name: 'category', value: props.id}))
    }

    return (
        <li className="nav-item">
            <a className="nav-link" href='#' onClick={handleClick}>{props.title}</a>
        </li>
    );
};

CategoriesItem.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
}

export default CategoriesItem;