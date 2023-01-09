import {rootApi} from "../rootApi";
import {OFFSET_LIMIT} from "../slices/filterSlice";

const aliasesParamsByCatalog = {
    category: 'categoryId',
    search: 'q',
};

const CatalogApi = rootApi.injectEndpoints({
            endpoints: (builder) => ({
                getCatalogList: builder.query({
                    query: (params) => {
                        const queryParams = params
                            ?.filter((filterParam) => !!filterParam.value)
                            ?.reduce((newObj, filterParam) => {
                                const filterParamName = aliasesParamsByCatalog[filterParam.name] || [filterParam.name];
                                newObj[filterParamName] = filterParam.value;
                                return newObj;
                            }, {});
                        return `/api/items${(queryParams !== {} && queryParams !== undefined) ? `?${new URLSearchParams(queryParams)}` : ''}`;
                    },
                    transformResponse: (response, meta, arg) => {
                        return {
                            data: response,
                            isOffset: arg?.find(param => param.name === 'offset').value > 0,
                            isEnd: response.length !== OFFSET_LIMIT
                        };
                    }
                }),
                getCatalogItemById: builder.query({
                    query: (itemId) => `/api/items/${itemId}`,
                    providesTags: (result, error, id) => [{type: 'Catalog', id}],
                }),
            }),
        }
    )
;

export const {
    useGetCatalogListQuery,
    useLazyGetCatalogListQuery,
    useGetCatalogItemByIdQuery,
} = CatalogApi;



