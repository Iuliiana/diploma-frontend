import React from 'react';
import propTypes from "prop-types";
import ProductCard from "./ProductCard";

const TopSalesList = (props) => {
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {props.topSalesList.map(item => <ProductCard key={item.id} {...item} />)}
            </div>
        </section>
    );
};

TopSalesList.propTypes = {
    topSalesList: propTypes.array.isRequired
}

export default TopSalesList;