import React from 'react';
import {routesNav} from "../../routes";
import NavigationItem from "./NavigationItem";

const Navigation = (props) => {
    const {className, sortType} = props;

    return (
        <ul className={className}>
            {
                routesNav
                    ?.filter(route => route.isActive && route.isNavMenu && !!route.sortBy[sortType])
                    .sort((a, b) => b.sortBy[sortType] - a.sortBy[sortType])
                    .map((route) => <NavigationItem key={route.id} {...route}/>)
            }
        </ul>
    );
};

export default Navigation;