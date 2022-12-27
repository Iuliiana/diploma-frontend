import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'search',
    value: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setSearchParams(state, action) {
            state.value = action.payload
        }
    }
});

export const {setSearchParams} = searchSlice.actions;
export default searchSlice.reducer;