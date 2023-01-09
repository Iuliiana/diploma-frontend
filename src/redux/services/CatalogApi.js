import {rootApi} from "../rootApi";
import {useDispatch} from "react-redux";

const aliasesParamsByCatalog = {
    category: 'categoryId',
    search: 'q',
};

//дозагрузка и лоадер

const CatalogApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCatalogList: builder.query({
            query: (params = null) => {
                let queryParams = '';
                if (params) {
                    queryParams = params
                        .filter((filterParam) => !!filterParam.value)
                        ?.reduce((newObj, filterParam) => {
                            const filterParamName = aliasesParamsByCatalog[filterParam.name] || [filterParam.name];
                            newObj[filterParamName] = filterParam.value;
                            return newObj;
                        }, {});
                }

                return `/api/items${!!queryParams ? `?${new URLSearchParams(queryParams)}` : ''}`;
            },
            transformResponse: (baseQueryReturnValue, meta, arg) => {
                const isOffset = arg?.find(param => param.name === 'offset').value > 0;
                if (true) {
                    console.log(1)
                    rootApi.util.updateQueryData('getCatalogList', [
                        {
                            name: 'search',
                            value: ''
                        },
                        {
                            name: 'offset',
                            value: 0
                        },
                        {
                            name: 'category',
                            value: 15
                        },
                    ], (draftPosts) => {
                        draftPosts.push(...baseQueryReturnValue)
                    })
                } else {
                    return baseQueryReturnValue;
                }
            },
            providesTags: ['Catalog'],
        }),
        getCatalogItemById: builder.query({
            query: (itemId) => `/api/items/${itemId}`,
            providesTags: (result, error, id) => [{type: 'Catalog', id}],
        }),
    }),
});

export const {
    useGetCatalogListQuery,
    useLazyGetCatalogListQuery,
    useGetCatalogItemByIdQuery,
} = CatalogApi;



