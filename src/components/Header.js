import React from 'react';
import {Link} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Search from "./Search";

const Header = () => {
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
                                         className="header-controls-pic header-controls-search"/>
                                    <div className="header-controls-pic header-controls-cart">
                                        {/*<div className="header-controls-cart-full">1</div>*/}
                                        <div className="header-controls-cart-menu"/>
                                    </div>
                                </div>
                                <Search className="header-controls-search-form form-inline"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;