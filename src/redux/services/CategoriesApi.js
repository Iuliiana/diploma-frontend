import {rootApi} from "../rootApi";

const CategoriesApi = rootApi.injectEndpoints({
        endpoints: (builder) => ({
            getCategoriesList: builder.query({
                query: () => '/api/categories',
                providesTags: ['Categories'],
            }),
        }),
    })
;

export const {
    useGetCategoriesListQuery,
} = CategoriesApi;



