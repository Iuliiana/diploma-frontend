import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchParams} from "../redux/slices/searchSlice";
import {setFilter} from "../redux/slices/filterSlice";
import {Input} from "../ui/input/Input";
import Forms from "../ui/forms/Forms";

const Search = (props) => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);

    const changeSearch = (e) => {
        dispatch(setSearchParams(e.target.value));
    }

    const submitSearch = () => {
        dispatch(setFilter(search));
    }

    return (
        <>
            <Forms data-id="search-form"
                   onSubmit={event => {
                       event.preventDefault();
                       submitSearch();
                   }}
                   {...props}>
                <Input className="form-control" placeholder="Поиск"
                       name="search"
                       value={search.value}
                       onChange={(e) => changeSearch(e)}/>
            </Forms>
        </>

    );
};

export default Search;