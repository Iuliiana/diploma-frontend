import {rootApi} from "../rootApi";

const aliasesParamsByCatalog = {
    category: 'categoryId',
    search: 'q',
};

//дозагрузка и лоадер

const CatalogApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCatalogList: builder.query({
            query: (params) => {
                const queryParams = params
                    .filter((filterParam) => !!filterParam.value)
                    ?.reduce((newObj, filterParam) => {
                        const filterParamName = aliasesParamsByCatalog[filterParam.name] || [filterParam.name];
                        newObj[filterParamName] = filterParam.value;
                        return newObj;
                    }, {});
                return `/api/items${!!queryParams ? `?${new URLSearchParams(queryParams)}` : ''}`;
            },
            // transformResponse(baseQueryReturnValue, meta, arg) {
            //
            //     console.log(baseQueryReturnValue)
            //     console.log(meta)
            //     console.log(arg)
            // },
            providesTags: ['Catalog'],
        }),
        // queryFn: (arg, queryApi, extraOptions, baseQuery) => {
        //     queryApi.abort()
        //     console.log(queryApi)
        //     console.log(extraOptions)
        // }
        // }),
        getCatalogItemById: builder.query({
            query: (itemId) => `/api/items/${itemId}`,
            providesTags: (result, error, id) => [{type: 'Catalog', id}],
        }),
    }),
});

export const {
    useGetCatalogListQuery,
    useGetCatalogItemByIdQuery,
} = CatalogApi;



