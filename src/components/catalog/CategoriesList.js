import React from 'react';
import propTypes from "prop-types";
import CategoriesItem from "./CategoriesItem";
import uuid from "react-uuid";
import {setFilter} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCategories} from "../../redux/slices/categoriesSlice";


const CategoriesList = (props) => {
    const dispatch = useDispatch();
    const {currentCategories} = useSelector(state => state.categories);

    const handleClick = (id) => {
        dispatch(setCurrentCategories(id));
        dispatch(setFilter({name: 'category', value: id}));
    }

    return (
        <ul className="catalog-categories nav justify-content-center">
            {props.list.map(item => <CategoriesItem key={uuid()} isCurrent={currentCategories === item.id} {...item}
                                                    onClick={handleClick}/>)}
        </ul>
    );
};

CategoriesList.propTypes = {
    list: propTypes.array.isRequired
}


export default CategoriesList;