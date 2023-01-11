import React from 'react';
import ProductCard from "./ProductCard";
import {useGetTopSalesListQuery} from "../redux/services/TopSalesApi";
import Loader from "../ui/loaders/Loader";
import Alerts from "./Alerts";
import {ERROR_LOAD_DATA} from "../helper/messages";
import Section from "../ui/Section";

const TopSalesList = () => {
    const {
        data: topSalesList,
        error: topSalesError,
        isLoading: topSalesLoading,
        refetch
    } = useGetTopSalesListQuery();

    if (!topSalesLoading && !topSalesError && topSalesList?.length === 0) return;
    if (!topSalesLoading && topSalesError) return <Alerts message={ERROR_LOAD_DATA} onClick={refetch}/>
    return (
        <Section sectionClassName='top-sales' sectionTitle='Хиты продаж!'>
            {topSalesLoading && <Loader/>}
            {!topSalesLoading && !topSalesError && (
                <div className="row">
                    {topSalesList.map(item => <ProductCard key={item.id} {...item} />)}
                </div>
            )}
        </Section>
    );
};

export default TopSalesList;