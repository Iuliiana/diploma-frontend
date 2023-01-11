import {createSlice} from "@reduxjs/toolkit";
import {KEY_BASKET_NAME_LOCAL_STORAGE} from "./basketSlice";
import {rootApi} from "../rootApi";

const initialState = {
    id: '',
    count: 1,
    price: '',
    title: '',
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
                    state.title = payload.title;
                    state.price = payload.price;
                    state.size = '';
                    state.count = 1;
                }
            )
    }
});

export const {decrementProductCount, incrementProductCount, setProductSize} = productSlice.actions;
export default productSlice.reducer