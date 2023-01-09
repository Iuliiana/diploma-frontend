import React from 'react';
import CatalogList from "../components/catalog/CatalogList";
import TopSalesList from "../components/TopSalesList";

const Home = () => {

    return (
        <>
            <TopSalesList/>
            <CatalogList/>
        </>
    );
}

export default Home;