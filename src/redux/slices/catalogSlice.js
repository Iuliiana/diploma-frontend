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
                    if (action.payload.length !== OFFSET_LIMIT) {
                        state.isEnd = true;
                    }
                    const isOffset = action.meta.arg.originalArgs?.find(param => param.name === 'offset').value > 0;
                    (isOffset) ? state.collection = [...state.collection, ...action.payload] : state.collection = action.payload;
                }
            )
    }

});

export default catalogSlice.reducer;
