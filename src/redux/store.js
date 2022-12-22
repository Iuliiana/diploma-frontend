import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rootApi} from "./rootApi";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";


const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    search: search,
    filter:filter
});


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rootApi.middleware),
});
export default store;
