import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
    reducerPath: 'rootApi',
     tagTypes: ['TopSales', 'Categories', 'Catalog'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_URL,
    }),
    endpoints: () => ({}),
});