import {rootApi} from "../rootApi";
import {OFFSET_LIMIT} from "../slices/filterSlice";
import {clearCatalog} from "../slices/catalogSlice";

const aliasesParamsByCatalog = {
    category: 'categoryId',
    search: 'q',
};

const CatalogApi = rootApi.injectEndpoints({
            endpoints: (builder) => ({
                getCatalogList: builder.query({
                    async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                        try {
                            await queryFulfilled;
                        } catch (e) {
                            if (arg?.find(param => param?.name === 'offset').value === 0 && e?.error?.name !== 'AbortError') {
                                dispatch(clearCatalog());
                            }
                        }
                    },
                    query: (params) => {
                        const queryParams = params
                            ?.filter((filterParam) => !!filterParam.value)
                            ?.reduce((newObj, filterParam) => {
                                const filterParamName = aliasesParamsByCatalog[filterParam.name] || [filterParam.name];
                                newObj[filterParamName] = filterParam.value;
                                return newObj;
                            }, {});
                        return `/items${(queryParams !== {} && queryParams !== undefined) ? `?${new URLSearchParams(queryParams)}` : ''}`;
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
                    query: (itemId) => `/items/${itemId}`,
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



