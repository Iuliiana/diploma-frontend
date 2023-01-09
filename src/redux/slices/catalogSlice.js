import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../rootApi";
import {OFFSET_LIMIT} from "./filterSlice";

const initialState = {
    collection: [],
    isLoading: false,
    isEnd: false,
    error: ''
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addMatcher(
    //             rootApi.endpoints.getCatalogList.matchFulfilled,
    //             (state, action) => {
    //                 state.isEnd = action.payload.length !== OFFSET_LIMIT;
    //                 const isOffset = action.meta.arg.originalArgs?.find(param => param.name === 'offset').value > 0;
    //                 if (isOffset) {
    //                     state.collection = [...state.collection, ...action.payload];
    //                 } else {
    //                     state.collection = action.payload;
    //                 }
    //             }
    //         )
    // }

    // extraReducers: {
    //     [getCatalog.fulfilled.type]: (state, action) => {
    //         state.isLoading = false;
    //         state.error = ''
    //         state.users = action.payload;
    //     },
    //     [getCatalog.pending.type]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [getCatalog.rejected.type]: (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     },
    // }

});

export default catalogSlice.reducer;
