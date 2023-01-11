import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';

const baseUrl = `${process.env.REACT_APP_URL}/api` || 'http://localhost:7070/api';

const baseQueryConfig = retry(fetchBaseQuery({
    baseUrl,
}), {
    maxRetries: 3,
});

export const rootApi = createApi({
    reducerPath: 'rootApi',
    tagTypes: ['TopSales', 'Categories', 'Catalog', 'Order'],
    baseQuery: baseQueryConfig,
    endpoints: () => ({}),
});