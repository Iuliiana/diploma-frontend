import React from 'react';
import TopSalesList from "../components/TopSalesList";
import {useGetTopSalesListQuery} from "../redux/services/TopSalesApi";
import Loader from "../ui/loaders/Loader";
import CatalogList from "../components/catalog/CatalogList";
import {useGetCatalogListQuery} from "../redux/services/CatalogApi";
import {useSelector} from "react-redux";


const Home = () => {
    const filter = useSelector(state => state.filter.params)
    const {
        data: topSalesList,
        error: topSalesError,
        isLoading: topSalesLoading,
        // refetch: topSalesRefetch //todo для перезагрузке из-за ошибки
    } = useGetTopSalesListQuery();

    const {
        data: catalogList,
        error: catalogError,
        isLoading: catalogLoading,
    } = useGetCatalogListQuery(filter);


    return (
        <>
            {topSalesLoading && <Loader/>}
            {!topSalesLoading && !topSalesError && !!topSalesList && <TopSalesList topSalesList={topSalesList}/>}
            {!topSalesLoading && topSalesError && <div>Ошибка</div>}

            {catalogLoading && <Loader/>}
            {!catalogLoading && !catalogError && !!catalogList && <CatalogList catalogList={catalogList}/>}
            {!catalogLoading && catalogError && <div>Ошибка</div>}
        </>
    );
}

export default Home;