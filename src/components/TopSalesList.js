import React from 'react';
import ProductCard from "./ProductCard";
import {useGetTopSalesListQuery} from "../redux/services/TopSalesApi";
import Loader from "../ui/loaders/Loader";

const TopSalesList = () => {
    const {
        data: topSalesList,
        error: topSalesError,
        isLoading: topSalesLoading,
    } = useGetTopSalesListQuery();

    if ((!topSalesLoading && topSalesError) || (!topSalesLoading && !topSalesError && topSalesList?.length === 0)) return;

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {topSalesLoading && <Loader/>}
            {!topSalesLoading && !topSalesError && (
                <div className="row">
                    {topSalesList.map(item => <ProductCard key={item.id} {...item} />)}
                </div>
            )}

        </section>
    );
};

export default TopSalesList;