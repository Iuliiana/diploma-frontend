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
    ]
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
        },
        setOffset(state) {
            const indexOffset = state.params.findIndex(param => param.name === 'offset');
            state.params[indexOffset].value += 6;
        },
        clearFilter(state) {
            state.params = initialState;
        }
    },
});

export const {setFilter, setOffset} = filterSlice.actions;
export default filterSlice.reducer;
