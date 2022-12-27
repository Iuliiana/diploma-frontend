import {rootApi} from "../rootApi";

const TopSalesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getTopSalesList: builder.query({
            query: () => '/api/top-sales',
            providesTags: ['TopSales'],
            // transformResponse: (returnValue, meta) => {
            //     if (!meta) return [];
            // },
        }),
    }),


});

export const {
    useGetTopSalesListQuery,
} = TopSalesApi;



