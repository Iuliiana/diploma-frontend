import {rootApi} from "../rootApi";

const TopSalesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getTopSalesList: builder.query({
            query: () => '/api/top-sales',
            providesTags: ['TopSales'],
        }),

        // builder.addCase(
        //     updateUser.rejected,
        //     (state, action) => {
        //         if (action.payload) {
        //             // Здесь мы имеем доступ к ошибкам, переданным в `createAsyncThunk()`
        //             state.error = action.payload.errorMessage;
        //         } else {
        //             state.error = action.error.message;
        //         }
        //     }
        // );
    }),
});

export const {
    useGetTopSalesListQuery,
} = TopSalesApi;



