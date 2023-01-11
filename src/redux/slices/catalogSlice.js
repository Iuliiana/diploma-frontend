import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../rootApi";

const initialState = {
    collection: [],
    isEnd: false
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {
        clearCatalog(state) {
            state.collection = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                rootApi.endpoints.getCatalogList.matchFulfilled,
                (state, {payload}) => {
                    state.isEnd = payload.isEnd;

                    if (payload.isOffset) {
                        state.collection.push(...payload.data);
                    } else {
                        state.collection = payload.data;
                    }
                }
            )
    }
});

export const {clearCatalog} = catalogSlice.actions;
export default catalogSlice.reducer;
