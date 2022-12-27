import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../rootApi";

const initialState = {
    collection: [
        {
            id: '',
            title: "Всё"
        },
    ],
    currentCategories: ''
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCurrentCategories(state, acton) {
            state.currentCategories = acton.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                rootApi.endpoints.getCategoriesList.matchFulfilled,
                (state, {payload}) => {
                    state.collection = [...state.collection, ...payload];
                }
            )
    }

});

export const {setCurrentCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
