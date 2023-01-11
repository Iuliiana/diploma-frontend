import {rootApi} from "../rootApi";

const CategoriesApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategoriesList: builder.query({
            query: () => '1/categories',
            extraOptions: {maxRetries: 5},
            providesTags: ['Categories'],
        }),
    }),
});

export const {
    useGetCategoriesListQuery,
} = CategoriesApi;


