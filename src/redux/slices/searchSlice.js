import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'search',
    value: ''
};

const search = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setSearchParams(state, action) {
            state.value = action.payload
        }
    }
});

export const {setSearchParams} = search.actions;
export default search.reducer;