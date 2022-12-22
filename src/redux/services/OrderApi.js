import {rootApi} from "../rootApi";

const OrderApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        setOrder: builder.query({
            query: () => '/api/order',
            providesTags: ['TopSales'],
        }),
    }),
});

export const {
    useSetOrderQuery,
} = OrderApi;



