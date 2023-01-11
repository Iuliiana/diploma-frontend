import {rootApi} from "../rootApi";

const TopSalesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getTopSalesList: builder.query({
            query: () => '/top-sales',
            providesTags: ['TopSales'],
        }),
    }),


});

export const {
    useGetTopSalesListQuery,
} = TopSalesApi;



