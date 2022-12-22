import {rootApi} from "../rootApi";

const aliasesParamsByCatalog = {
    category: 'categoryId',
    search: 'q',
};

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
                providesTags: ['Catalog'],
            }),
            getCatalogItemById: builder.query({
                query: (itemId) => `/api/items/${itemId}`,
                providesTags: (result, error, id) => [{type: 'Catalog', id}],
            }),
        }),
    })
;

export const {
    useGetCatalogListQuery,
    useGetCatalogItemByIdQuery,
} = CatalogApi;



