import {createSlice} from "@reduxjs/toolkit";

export const KEY_BASKET_NAME_LOCAL_STORAGE = 'ShopBasket';
const initialState = {
    totalCount: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            const product = action.payload;
            const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);

            if (!productsDataString) {
                state.totalCount = product.count;
                localStorage.setItem(KEY_BASKET_NAME_LOCAL_STORAGE, JSON.stringify([product]));
            } else {
                const productsData = JSON.parse(productsDataString);

                const products = [...productsData.filter(item => !(item.id === product.id && item.size === product.size)), product];
                state.totalCount = products.reduce((acc, current) => acc + current.count, 0);
                localStorage.setItem(KEY_BASKET_NAME_LOCAL_STORAGE, JSON.stringify(products));
            }
        },
        deleteProduct(state, action) {
            const product = action.payload;
            const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
            const productsData = JSON.parse(productsDataString);
            const products = [...productsData.filter(item => !(item.id === product.id && item.size === product.size))];
            localStorage.setItem(KEY_BASKET_NAME_LOCAL_STORAGE, JSON.stringify(products));

            state.totalCount = products.reduce((acc, current) => acc + current.count, 0);
        },
        getTotalCount(state) {
            const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
            if (productsDataString) {
                const productsData = JSON.parse(productsDataString);
                state.totalCount = productsData.reduce((acc, current) => acc + current.count, 0);
            }
        },
        clearBasket(state) {
            localStorage.removeItem(KEY_BASKET_NAME_LOCAL_STORAGE);
            state.totalCount = 0;
        }
    }
});

export const {getTotalCount, addProduct, deleteProduct, clearBasket} = basketSlice.actions;
export default basketSlice.reducer;
