import {rootApi} from "../rootApi";
import {clearBasket, KEY_BASKET_NAME_LOCAL_STORAGE} from "../slices/basketSlice";


const OrderApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        setOrder: builder.mutation({
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(clearBasket());
                } catch (e) {
                    //  console.error('fetchSetOrder error', e);
                }
            },
            query(order) {
                const body = {
                    owner: {
                        phone: order?.phone,
                        address: order?.address,
                    }
                };
                const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
                if (!productsDataString)
                    throw new Error('Пустая корзина');

                const products = JSON.parse(productsDataString);
                body.items = products.map(product => ({
                    id: Number(product.id),
                    price: Number(product.price),
                    count: Number(product.count),
                }));

                return {
                    url: '/order',
                    method: 'POST',
                    body,
                };
            },
            extraOptions: {maxRetries: 0},
            providesTags: ['Order'],
        }),
    }),
});

export const {
    useSetOrderMutation
} = OrderApi;



