import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Search from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../redux/slices/filterSlice";
import {getTotalCount} from "../redux/slices/basketSlice";

const Header = () => {
    const search = useSelector(state => state.search);
    const [isShowSearch, setIsShowSearch] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const basketTotalCount = useSelector(state => state.basket.totalCount);

    useEffect(() => {
        dispatch(getTotalCount());
        // eslint-disable-next-line
    }, []);

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
                            <img src="/img/header-logo.png" alt="Bosa Noga"/>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <Navigation className="navbar-nav mr-auto" sortType='header'/>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander"
                                         className="header-controls-pic header-controls-search"
                                         onClick={handleClickShowSearch}/>
                                    <div className="header-controls-pic header-controls-cart"
                                         onClick={() => navigate('/cart.html')}>
                                        {!!basketTotalCount &&
                                            <div className="header-controls-cart-full">{basketTotalCount}</div>}
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