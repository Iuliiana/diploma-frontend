import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../rootApi";

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
    isEnd: false,
};
const LIMIT = 6;

const filter = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter(state, action) {
            state.params.forEach(param => {
                if (param.name === action.payload.name)
                    param.value = action.payload.value
            })
        },
        // loadMore(state, {payload}) {
        //     if (payload !== []) {
        //         state.collection.push(payload);
        //         state.offset += LIMIT;
        //     }
        //     state.isEnd = payload.length < LIMIT
        // }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                rootApi.endpoints.getCatalogList.matchFulfilled,
                (state, {payload}) => {
                    console.log('после успешной загрузки')
                }
            )

    }

});

export const {setFilter} = filter.actions;
//export {setFilter} = catalog.actions;
export default filter.reducer;
