import React from 'react';
import Loader from "../../ui/loaders/Loader";
import Search from "../../components/Search";
import CatalogList from "../../components/catalog/CatalogList";
import {useGetCatalogListQuery} from "../../redux/services/CatalogApi";
import {useSelector} from "react-redux";


const Catalog = () => {
    const filter = useSelector(state => state.filter.params)
    const {
        data: catalogList,
        error: catalogError,
        isLoading: catalogLoading,
    } = useGetCatalogListQuery(filter);
    return (
        <>
            {catalogLoading && <Loader/>}
            {!catalogLoading && !catalogError && !!catalogList && (
                <CatalogList catalogList={catalogList}>
                    <Search className="catalog-search-form form-inline"/>
                </CatalogList>
            )}
            {!catalogLoading && catalogError && <div>Ошибка</div>}
        </>
    );
};

export default Catalog;