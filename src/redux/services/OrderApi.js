import {rootApi} from "../rootApi";

const OrderApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        setOrder: builder.mutation({
            query(order) {
                return {
                    url: '/api/order',
                    method: 'POST',
                    body: order,
                };
            },
            providesTags: ['Order'],
            //  transformResponse: (result: { data: { post: IPostResponse } }) => result.data.post,
        }),
    }),
});

export const {
    useSetOrderMutation
} = OrderApi;



