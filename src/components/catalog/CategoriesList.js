import React from 'react';
import propTypes from "prop-types";
import CategoriesItem from "./CategoriesItem";


const CategoriesList = (props) => {
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href='#'>Все</a>
            </li>
            {props.list.map(item => <CategoriesItem key={item.id} {...item} />)}
        </ul>
    );
};

CategoriesList.propTypes = {
    list: propTypes.array.isRequired
}


export default CategoriesList;