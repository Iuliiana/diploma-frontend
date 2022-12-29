import React from 'react';
import Search from "../components/Search";
import CatalogList from "../components/catalog/CatalogList";


const Catalog = () => {

    return (
        <>
            <CatalogList>
                <Search className="catalog-search-form form-inline"/>
            </CatalogList>
        </>
    );
};

export default Catalog;