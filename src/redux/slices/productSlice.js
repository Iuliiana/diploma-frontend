import {createSlice} from "@reduxjs/toolkit";
import {KEY_BASKET_NAME_LOCAL_STORAGE} from "./basketSlice";
import {rootApi} from "../rootApi";

const initialState = {
    id: '',
    count: 1,
    price: '',
    size: ''
};

export const getProductCount = (id, size) => {
    const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
    if (!productsDataString) return 1;

    const productsData = JSON.parse(productsDataString);
    const product = productsData.find(item => item.id === id && item.size === size);
    return product?.count || 1;
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        productToBasket(state) {
            const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);

            if (!productsDataString) {
                localStorage.setItem(KEY_BASKET_NAME_LOCAL_STORAGE, JSON.stringify([state]));
            } else {
                const productsData = JSON.parse(productsDataString);

                const products = [...productsData.filter(item => !(item.id === state.id && item.size === state.size)), state];
                localStorage.setItem(KEY_BASKET_NAME_LOCAL_STORAGE, JSON.stringify(products));
            }
        },
        setProductSize(state, action) {
            state.size = action.payload;
            state.count = getProductCount(state.id, action.payload);
        },
        incrementProductCount(state) {
            state.count = state.count + 1;
        },
        decrementProductCount(state) {
            state.count = state.count - 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                rootApi.endpoints.getCatalogItemById.matchFulfilled,
                (state, {payload}) => {
                    state.id = String(payload.id);
                    state.price = payload.price;
                }
            )
    }
});

export const {productToBasket, decrementProductCount, incrementProductCount, setProductSize} = productSlice.actions;
export default productSlice.reducer