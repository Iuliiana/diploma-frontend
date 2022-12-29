import React, {useState} from 'react';
import {Link, redirect, useNavigate} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Search from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../redux/slices/filterSlice";

const Header = () => {
    const search = useSelector(state => state.search);
    const [isShowSearch, setIsShowSearch] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickShowSearch = () => {
        if (search.value !== '') {
            dispatch(setFilter(search));
            return navigate("/catalog.html");
        }
        setIsShowSearch(prevState => !prevState);
    };

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to='/'>
                            <img src="./img/header-logo.png" alt="Bosa Noga"/>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <Navigation className="navbar-nav mr-auto" sortType='header'/>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander"
                                         className="header-controls-pic header-controls-search"
                                         onClick={handleClickShowSearch}/>
                                    <div className="header-controls-pic header-controls-cart">

                                        <div className="header-controls-cart-full">1</div>

                                        <div className="header-controls-cart-menu"/>
                                    </div>
                                </div>
                                <Search
                                    className={`header-controls-search-form form-inline ${isShowSearch ? 'invisible' : ''} `}/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;