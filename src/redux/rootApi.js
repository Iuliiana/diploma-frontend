import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';


const baseQueryConfig = retry(fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
}), {
    maxRetries: 5,
});

export const rootApi = createApi({
    reducerPath: 'rootApi',
    tagTypes: ['TopSales', 'Categories', 'Catalog', 'Order'],
    baseQuery: baseQueryConfig,
    endpoints: () => ({}),
});