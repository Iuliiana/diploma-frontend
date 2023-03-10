import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    params: [
        {
            name: 'category',
            value: ''
        },
        {
            name: 'search',
            value: ''
        },
        {
            name: 'offset',
            value: 0
        },
    ],
    isOffset: false
};

export const OFFSET_LIMIT = 6;

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter(state, action) {
            const removeFilterParams = ['offset', action.payload.name];
            const addFilterParams = [{name: 'offset', value: 0}, action.payload];

            state.params = [...state.params.filter(param => !removeFilterParams.includes(param.name)), ...addFilterParams];
            state.isOffset = false;
        },
        setOffset(state) {
            const indexOffset = state.params.findIndex(param => param.name === 'offset');
            state.params[indexOffset].value += 6;
            state.isOffset = true;
        },
        clearFilter(state) {
            state = initialState;
        }
    },
});

export const {setFilter, setOffset, clearFilter} = filterSlice.actions;
export default filterSlice.reducer;
