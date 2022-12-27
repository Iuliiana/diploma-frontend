import React from 'react';
import TopSalesList from "../components/TopSalesList";
import CatalogList from "../components/catalog/CatalogList";

const Home = () => {
    return (
        <>
            <TopSalesList/>
            <CatalogList/>
        </>
    );
}

export default Home;