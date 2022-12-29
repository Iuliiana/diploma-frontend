import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../rootApi";
import {OFFSET_LIMIT} from "./filterSlice";

const initialState = {
    collection: [],
    isEnd: false,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                rootApi.endpoints.getCatalogList.matchFulfilled,
                (state, action) => {
                    state.isEnd = action.payload.length !== OFFSET_LIMIT;
                    const isOffset = action.meta.arg.originalArgs?.find(param => param.name === 'offset').value > 0;
                    if (isOffset) {
                        state.collection = [...state.collection, ...action.payload];
                    } else {
                        state.collection = action.payload;
                    }
                }
            )
    }

});

export default catalogSlice.reducer;
