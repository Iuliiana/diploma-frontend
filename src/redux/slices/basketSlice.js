import {createSlice} from "@reduxjs/toolkit";


export const KEY_BASKET_NAME_LOCAL_STORAGE = 'ShopBasket';
const initialState = {
    totalCount: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        getTotalCount(state) {
            const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
            if (productsDataString) {
                const productsData = JSON.parse(productsDataString);
                state.totalCount = productsData.reduce((acc, current) => acc + current.count, 0);
            }
        },
        clearBasket(state) {
            state = initialState;
        }
    }
});

export const {getTotalCount} = basketSlice.actions;
export default basketSlice.reducer;
